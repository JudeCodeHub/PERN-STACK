import { create } from "zustand";
import axios from "axios";
import toast from "react-hot-toast";

const BASE_URL = "http://localhost:5001";

export const useProductStore = create((set, get) => ({
  products: [],
  loading: false,
  error: null,

formData: {
    name: "",
    price: "",
    image: "",
  },

setFormData: (formData) => set({ formData }),
resetForm: () => set({ formData: { name: "", price: "", image: "" } }),

addProduct: async (e) => {
    e.preventDefault();
    set({ loading: true });

    try {
      const { formData } = get();
      await axios.post(`${BASE_URL}/api/products`, formData);
      await get().fetchProducts();
      get().resetForm();
      toast.success("Product added successfully");
      document.getElementById("add_product_modal").close();
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      set({ loading: false });
    }
  },

fetchProducts: async () => {
    set({ loading: true });
    try {
      const response = await axios.get(`${BASE_URL}/api/products`);
      let productList = [];
      if (Array.isArray(response.data)) {
        productList = response.data;
      } else if (response.data && Array.isArray(response.data.data)) {
        productList = response.data.data;
      } else if (response.data && Array.isArray(response.data.products)) {
        productList = response.data.products;
      }

      set({ products: productList, error: null });
    } catch (error) {
      if (error.status == 429)
        set({ error: "Rate limit exceeded", products: [] });
      else set({ error: "Failed to fetch products", products: [] });
    } finally {
      set({ loading: false });
    }
  },

deleteProduct: async (id) => {
    set({ loading: true });
    try {
      await axios.delete(`${BASE_URL}/api/products/${id}`);
      set((prev) => ({
        products: prev.products.filter((product) => product.id !== id),
      }));
      toast.success("Product deleted successfully");
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      set({ loading: false });
    }
  },
}));
