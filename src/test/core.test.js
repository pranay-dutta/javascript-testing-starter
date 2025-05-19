import {
  describe,
  expect,
  // test,
  it,
  // runOnce,
  // beforeAll,
  // afterAll,
  // beforeEach,
  // afterEach,
} from "vitest";
import {
  // calculateDiscount,
  // canDrive,
  fetchData,
  // getCoupons,
  // isPriceInRange,
  // isValidUsername,
  // Stack,
  // validateUserInput,
} from "../core";

// // describe('test suite', () => {
// //   it('test case', () => {
// //     const result = 'The requested file was not found';
// //     expect(result).toBeDefined();
// //     expect(result).toMatch(/not found/i);
// //   })
// // })
// // describe('test suite', () => {
// //   it('test case', () => {
// //     const result = { name: "Pranay" };
// //     expect(result).toHaveProperty("name");
// //     expect(typeof result.name).toBe('string');
// //   })
// // })

// // describe("getCoupons", () => {
// //   it("should return an array that is not empty", () => {
// //     const coupons = getCoupons();
// //     expect(Array.isArray((coupons))).toBe(true); //not required in ts
// //     expect(coupons.length).toBeGreaterThan(0);
// //   })
// //   it('should return an array with valid coupon codes', () => {
// //     const coupons = getCoupons();
// //     coupons.forEach(coupon => {
// //       expect(coupon).toHaveProperty('code');
// //       expect(typeof coupon.code).toBe('string'); //not reqiured in ts
// //       expect(coupon.code).toBeTruthy();
// //     })
// //   })

// //   it('should return an array with valid discounts', () => {
// //     const coupons = getCoupons();
// //     coupons.forEach(coupon => {
// //       expect(coupon).toHaveProperty('discount');
// //       expect(typeof coupon.discount).toBe('number'); //not reqiured in ts
// //       expect(coupon.discount).toBeGreaterThan(0);
// //       expect(coupon.discount).toBeLessThanOrEqual(1);
// //     })
// //   })
// // })
// //
// // describe('calculateDiscount', () => {
// //   it('should return invalid if first arg is neg or not number', () => {
// //     expect(calculateDiscount(0, '')).toMatch(/invalid/i); //not reqiured in ts
// //     expect(calculateDiscount("0", '')).toMatch(/invalid/i);
// //   })
// //   it('should return invalid if second arg is not string', () => { //not required in ts
// //     expect((calculateDiscount(1, 1))).toMatch(/invalid/i);
// //   })
// //   it('should return valid discount', () => {
// //     expect(calculateDiscount(10, 'SAVE10')).toBe(9);
// //     expect(calculateDiscount(10, 'SAVE20')).toBe(8);
// //   })

// // })

// // describe('validateUserInput', () => {
// //   it('should return success if given valid input', () => {
// //     expect(validateUserInput("Rick", 20)).toMatch(/success/i)
// //   })
// //   it('should return invalid if username is not a string.', () => {
// //     expect(validateUserInput(2, 20)).toMatch(/invalid/i)
// //   })
// //   it('should return invalid if username is less than 3 characters.', () => {
// //     expect(validateUserInput("aa", 20)).toMatch(/invalid/i)
// //   })
// //   it('should return error if username is longer than 255 characters', () => {
// //     expect(validateUserInput('a'.repeat(256)), 19).toMatch(/invalid/i);
// //   })
// //   it('should return invalid if age is not a number', () => {
// //     expect(validateUserInput('pranay', "2")).toMatch(/invalid/i);
// //   })
// //   it('should return invalid if age less than 18', () => {
// //     expect(validateUserInput('pranay', 17)).toMatch(/invalid/i);
// //   })
// //   it('should return invalid if age is greater than 100', () => {
// //     expect(validateUserInput('pranay', 101)).toMatch(/invalid/i);
// //   })
// //   it('should return error if both username and age are invalid', () => {
// //     expect(validateUserInput("", 0)).toMatch(/invalid username/i);
// //     expect(validateUserInput("", 0)).toMatch(/invalid age/i);
// //   })

// // })

// // describe('isPriceInrange', () => {
// //   it.each([
// //     { scenario: 'price < min', price: -1, output: false },
// //     { scenario: 'price = min', price: 0, output: true },
// //     { scenario: 'price between min and max', price: 1, output: true },
// //     { scenario: 'price = max', price: 2, output: true },
// //     { scenario: 'price > max', price: 3, output: false },
// //   ])('should return $output when $scenario', ({ price, output }) => {
// //     expect(isPriceInRange(price, 0, 2)).toBe(output);
// //   })
// // })
// // describe('isValidUsername', () => {
// //   it('should return false if username is too short or too large', () => {
// //     expect(isValidUsername('rick')).toBe(false)
// //     expect(isValidUsername('r'.repeat(16))).toBe(false)
// //   })
// //   it('should return true if username is within the range', () => {
// //     expect(isValidUsername('rickd')).toBe(true)
// //     expect(isValidUsername('d'.repeat(15))).toBe(true)
// //   })
// //   it('should return error if username is not a string', () => {
// //     expect(isValidUsername(1)).toHaveProperty('message')
// //   })
// // })
// // describe('canDrive', () => {
// //   it.each([
// //     //Positive testing
// //     { age: 27, country: 'US', result: true },
// //     { age: 38, country: 'UK', result: true },

// //     //Boundary Testing
// //     { age: 16, country: 'US', result: true },
// //     { age: 17, country: 'UK', result: true },

// //     //Negative Testing
// //     { age: 15, country: 'US', result: false },
// //     { age: 16, country: 'UK', result: false }

// //   ])('should return $result for $age, $country', ({ age, country, result }) => {
// //     expect(canDrive(age, country)).toBe(result)
// //   })
// //   //Negative testing
// //   test('should return invalid if given wrong country code', () => {
// //     expect(canDrive(18, '')).toMatch(/invalid/i)
// //     expect(canDrive(18, 'IN')).toMatch(/invalid/i)
// //   })
// // })

describe("fetchData", async () => {
  it("should return a promise that will resolve to an array of numbers", async () => {
    try {
      const res = await fetchData();
      expect(Array.isArray(res)).toBe(true);
      expect(res.length).toBeGreaterThan(0);
    } catch (error) {
      console.log(error);
      expect(error.reason).toMatch(/failed/i);
    }
  });
});
// describe('test suite', () => {
//   beforeAll(() => console.log('before all'))
//   beforeEach(() => console.log('before each'))
//   afterEach(() => console.log('after each'))
//   afterAll(() => console.log('after all'))

//   test('test 1', () => { })
//   test('test 2', () => { })

// })

//we can use before each here
// describe('Stack class', () => {
//   const st = new Stack()
//   it('should throw an error when poped or peeked from an empty stack', () => {
//     expect(() => st.peek()).toThrow(/empty/i)
//     expect(() => st.pop()).toThrow(/empty/i)
//   })
//   it('should create a stack of items', () => {
//     expect(st).toHaveProperty('items');
//   })
//   it('should push new items to the top of the stack', () => {
//     const oldLength = st.items.length

//     st.push(3) //Arrage
//     expect(st.items.length).toBe(oldLength + 1)
//     expect(st.items[oldLength]).toBe(3)
//   })
//   it('should pop items from the top of the stack', () => {
//     st.push(55)
//     const oldLength = st.items.length
//     const val = st.pop()

//     expect(st.items.length).toEqual(oldLength - 1)
//     expect(val).toEqual(55)
//   })
//   it('should clear the stack', () => {
//     st.push(22)
//     st.clear();
//     expect(st.items.length).toBe(0)
//   })

//   it('should return true if stack is empty', () => {
//     st.clear()
//     expect(st.isEmpty()).toBe(true);
//   })
//   it('should return the size of the stack', () => {
//     expect(st.size()).toEqual(st.items.length)
//   })
// })
