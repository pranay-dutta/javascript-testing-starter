import { vi, it, expect, describe, beforeEach } from "vitest";
import {
  getDiscount,
  getPriceInCurrency,
  getShippingInfo,
  isOnline,
  login,
  renderPage,
  signUp,
  submitOrder,
} from "../mocking";
import { getExchangeRate } from "../libs/currency";
import { getShippingQuote } from "../libs/shipping";
import { trackPageView } from "../libs/analytics";
import { charge } from "../libs/payment";
import { sendEmail } from "../libs/email";
import security from "../libs/security";

vi.mock("../libs/currency");
vi.mock("../libs/shipping");
vi.mock("../libs/analytics");
vi.mock("../libs/payment");
vi.mock("../libs/email", async (importOriginal) => {
  const originalModule = await importOriginal();
  return {
    ...originalModule,
    sendEmail: vi.fn(),
  };
});

describe("test suite", () => {
  it("test case", () => {
    const greet = vi.fn();
    greet.mockImplementation((name) => "Hello " + name);
    console.log(greet("Rick"));

    expect(greet).toHaveBeenCalledWith("Rick");
    expect(greet).toHaveBeenCalledOnce();
  });
});
describe("test suite", () => {
  it("test case 2", () => {
    const sendText = vi.fn();
    sendText.mockReturnValue("ok");
    const res = sendText("message");

    expect(sendText).toHaveBeenCalledWith("message");
    expect(res).toMatch(/ok/i);
  });
});
describe("getPriceInCurrency", () => {
  it("should reutrn price in target currency", () => {
    vi.mocked(getExchangeRate).mockReturnValue(1.5);
    const price = getPriceInCurrency(20, "INR");
    expect(price).toBe(30);
  });
});
describe("getShippingInfo", () => {
  it("should return shipping unavable if quote cannot be fetched", () => {
    vi.mocked(getShippingQuote).mockReturnValue(null);
    const res = getShippingInfo("Kolkata");
    expect(res).toMatch(/unavailable/i);
  });
  it("should return shipping info if quote can be fetched", () => {
    vi.mocked(getShippingQuote).mockReturnValue({ cost: 20, estimatedDays: 3 });
    const res = getShippingInfo("Kolkata");
    console.log(res);

    expect(res).toMatch(/shipping cost: \$20 \(3 days\)/i);
  });
});
describe("renderPage", () => {
  it("should return correct content", async () => {
    const result = await renderPage();
    expect(result).toMatch(/content/i);
  });
  it("should have called the trackPageview", async () => {
    await renderPage();
    expect(trackPageView).toHaveBeenCalledWith("/home");
  });
});
describe("submitOrder", () => {
  const order = { totalAmount: 20 };
  const creditCard = { creditCardNumber: 222 };

  it("should charge the customer", async () => {
    vi.mocked(charge).mockResolvedValue({ status: "success" });

    await submitOrder(order, creditCard);
    expect(charge).toHaveBeenCalled(creditCard, order.totalAmount);
  });
  it("should return success when payment is successful", async () => {
    vi.mocked(charge).mockResolvedValue({ status: "success" });

    const result = await submitOrder(order, creditCard);
    expect(result).toEqual({ success: true });
  });
  it("should return error when payment is unsuccessful", async () => {
    vi.mocked(charge).mockResolvedValue({ status: "failed" });

    const result = await submitOrder(order, creditCard);
    expect(result).toEqual({ success: false, error: "payment_error" });
  });
});
//partial mocking
describe("signUp", () => {
  const email = "name@gmail.com";
  beforeEach(() => {
    // vi.mocked(sendEmail).mockClear(); //clears the state function before each
    //or
    // vi.clearAllMocks(); or use vitestconfig
  });

  it("should return false if email is not valid", async () => {
    const res = await signUp("a");
    expect(res).toBe(false);
  });
  it("should send an true if email is valid", async () => {
    const res = await signUp(email);
    expect(res).toBe(true);
  });
  it("should send the welcome email if email is valid", async () => {
    await signUp(email);
    expect(sendEmail).toHaveBeenCalledOnce();
    const args = vi.mocked(sendEmail).mock.calls[0];

    expect(args[0]).toBe(email);
    expect(args[1]).toMatch(/welcome/i);
  });
});

//sping on functions
describe("login", () => {
  it("should email one-time login code", async () => {
    const email = "name@email.com";
    const spy = vi.spyOn(security, "generateCode");

    await login(email);
    const securityCode = spy.mock.results[0].value.toString();
    expect(sendEmail).toHaveBeenCalledWith(email, securityCode);
  });
});

//mocking dates
describe("isOnline", () => {
  it("should return false if current hour is outside opening hours", () => {
    vi.setSystemTime("2025-1-1 7:59");
    expect(isOnline()).toBe(false);

    vi.setSystemTime("2025-1-1 20:01");
    expect(isOnline()).toBe(false);
  });
  it("should return true if current hour is within opening hours", () => {
    vi.setSystemTime("2025-1-1 8:00");
    expect(isOnline()).toBe(true);

    vi.setSystemTime("2025-1-1 19:59");
    expect(isOnline()).toBe(true);
  });
});

describe("getDiscount", () => {
  it("should return 20% discount if christmas day", () => {
    vi.setSystemTime("2026-12-25 00:01");
    expect(getDiscount()).toBe(0.2);

    vi.setSystemTime("2026-12-25 23:59");
    expect(getDiscount()).toBe(0.2);
  });
  it("should not return discount on other days", () => {
    vi.setSystemTime("2026-12-24 00:01");
    expect(getDiscount()).toBe(0);

    vi.setSystemTime("2026-12-26 00:01");
    expect(getDiscount()).toBe(0);
  });
});
