import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    clearMocks: true, //to clear the mock funcion before each test
  },
});
