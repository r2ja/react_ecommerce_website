import { describe, it, expect, vi } from "vitest";
import axios from "axios";
import { productService } from "./productService";

vi.mock("axios");

describe("productService", () => {
  describe("getProducts", () => {
    it("should fetch products successfully", async () => {
      const mockProducts = {
        products: [
          { id: 1, name: "Product 1" },
          { id: 2, name: "Product 2" },
        ],
      };

      axios.get.mockResolvedValue({ data: mockProducts });

      const result = await productService.getProducts();

      expect(axios.get).toHaveBeenCalledWith("https://dummyjson.com/products");

      expect(result).toEqual(mockProducts);
    });
  });
});

// it("should handle errors when fetching products fails", async () => {
//   // Mock the error

//   const mockError = new Error("Network error");

//   axios.get.mockRejectedValue(mockError); // Call the method and expect it to throw

//   await expect(productService.getProducts()).rejects.toThrow(
//     "Network error"
//   ); // Verify that console.error was called

//   expect(console.error).toHaveBeenCalledWith(
//     "Error fetching products:",
//     mockError
//   );
// });
