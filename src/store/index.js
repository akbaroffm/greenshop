import { createStore } from "vuex"; // Vuex kutubxonasidan store yaratish uchun import
import axios from "axios"; // HTTP so'rovlarini yuborish uchun axios kutubxonasini import

// Vuex store yaratish
export default createStore({
  state: {
    // Dastlabki holat (state) - ilovaning ma'lumotlari
    products: [], // Mahsulotlar ro'yxati
    categories: [], // Kategoriyalar ro'yxati
    sizes: [], // O'lchamlar ro'yxati
    tagNavbar: [], // Taglar navigatsiyasi
    selectedCategoryId: null, // Tanlangan kategoriya ID
    selectedSizeId: null, // Tanlangan o'lcham ID
    selectedTagId: null, // Tanlangan tag ID
    priceRange: { min: 0, max: Infinity }, // Narx oralig'i
    cart: JSON.parse(localStorage.getItem("cart")) || [], // Savatcha - localStorage'dan o'qiladi yoki bo'sh ro'yxat
  },
  mutations: {
    // State'ni yangilash uchun mutatsiyalar
    setProducts(state, products) {
      state.products = products; // Mahsulotlar ro'yxatini yangilash
    },
    setCategories(state, categories) {
      state.categories = categories; // Kategoriyalar ro'yxatini yangilash
    },
    setSizes(state, sizes) {
      state.sizes = sizes; // O'lchamlar ro'yxatini yangilash
    },
    setTagNavbar(state, tagNavbar) {
      state.tagNavbar = tagNavbar; // Taglar navigatsiyasini yangilash
    },
    setSelectedCategoryId(state, id) {
      state.selectedCategoryId = id; // Tanlangan kategoriya ID'sini yangilash
    },
    setSelectedSizeId(state, id) {
      state.selectedSizeId = id; // Tanlangan o'lcham ID'sini yangilash
    },
    setSelectedTagId(state, id) {
      state.selectedTagId = id; // Tanlangan tag ID'sini yangilash
    },
    setPriceRange(state, range) {
      state.priceRange = range; // Narx oralig'ini yangilash
    },
    addToCart(state, { product, quantity }) {
      console.log("Adding to cart:", product, quantity); // Savatchaga mahsulot qo'shilayotganini ko'rsatish

      // Mahsulotni tekshirish va uni cartga qo'shish
      const existingItem = state.cart.find(
        (item) => item.id === product.id && item.size === product.size
      );

      if (existingItem) {
        // Agar mahsulot mavjud bo'lsa, uning miqdorini oshirish
        existingItem.quantity += quantity;
      } else {
        // Yangi mahsulot qo'shish, quantity ni passed value bilan o'rnatish
        state.cart.push({ ...product, quantity });
      }

      // Savatchani localStorage'ga saqlash
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    updateCartItemQuantity(state, { id, size, quantity }) {
      const item = state.cart.find(
        (item) => item.id === id && item.size === size
      );
      if (item) {
        item.quantity = quantity; // Savatchadagi mahsulot miqdorini yangilash
      }
    },
    removeFromCart(state, { id, size }) {
      // Cartdagi mahsulotni o'chirish
      state.cart = state.cart.filter(
        (item) => item.id !== id || item.size !== size
      );
      // Cartni localStorage'ga saqlash
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
  actions: {
    // Asinxron operatsiyalar uchun actions
    async fetchProducts({ commit }) {
      try {
        const response = await axios.get(
          "https://f77a51255486f515.mokky.dev/products"
        );
        commit("setProducts", response.data); // Mahsulotlarni olish va state'ni yangilash
      } catch (error) {
        console.error("Error fetching products:", error); // Xatolikni konsolga chiqarish
      }
    },
    async fetchCategories({ commit }) {
      try {
        const response = await axios.get(
          "https://f77a51255486f515.mokky.dev/categories"
        );
        commit("setCategories", response.data[0].categories); // Kategoriyalarni olish va state'ni yangilash
      } catch (error) {
        console.error("Error fetching categories:", error); // Xatolikni kons        console.error("Error fetching categories:", error); // Xatolikni konsolga chiqarish
      }
    },
    async fetchSizes({ commit }) {
      try {
        const response = await axios.get(
          "https://f77a51255486f515.mokky.dev/filters"
        );
        commit("setSizes", response.data); // O'lchamlarni olish va state'ni yangilash
      } catch (error) {
        console.error("Error fetching sizes:", error); // Xatolikni konsolga chiqarish
      }
    },
    async fetchTagNavbar({ commit }) {
      try {
        const response = await axios.get(
          "https://f77a51255486f515.mokky.dev/navbar"
        );
        commit("setTagNavbar", response.data[0]["tag-navbar"]); // Taglar navigatsiyasini olish va state'ni yangilash
      } catch (error) {
        console.error("Error fetching tag navbar:", error); // Xatolikni konsolga chiqarish
      }
    },
    addToCart({ commit }, product) {
      commit("addToCart", product); // Savatchaga mahsulot qo'shish
    },
    updateCartItemQuantity({ commit }, payload) {
      commit("updateCartItemQuantity", payload); // Savatchadagi mahsulot miqdorini yangilash
    },
    removeFromCart({ commit }, payload) {
      commit("removeFromCart", payload); // Savatchadan mahsulotni o'chirish
    },
  },
  getters: {
    // State'dan ma'lumotlarni olish uchun getterlar
    filteredProducts: (state) => {
      return state.products.filter((product) => {
        const matchesCategory =
          !state.selectedCategoryId ||
          product.categoryId === state.selectedCategoryId; // Kategoriya bo'yicha filtr
        const matchesSize =
          !state.selectedSizeId || product.sizeId === state.selectedSizeId; // O'lcham bo'yicha filtr
        const matchesTag =
          !state.selectedTagId || product.tagId === state.selectedTagId; // Tag bo'yicha filtr
        const price = parseFloat(product.price.replace("$", "")); // Narxni raqamga aylantirish
        const matchesPrice =
          price >= state.priceRange.min && price <= state.priceRange.max; // Narx oralig'i bo'yicha filtr
        return matchesCategory && matchesSize && matchesTag && matchesPrice; // Barcha filtrlarni birlashtirish
      });
    },
    cartItems(state) {
      console.log("Cart items:", state.cart);
      return state.cart; // Savatchadagi mahsulotlarni qaytarish
    },
    cartTotal(state) {
      return state.cart.reduce((total, item) => {
        // Har bir mahsulotning narxini olish va faqat raqamlar va nuqtani qoldirish
        const price = parseFloat(item.price.replace(/[^0-9.]/g, ""));
        // Mahsulotning miqdorini olish
        const quantity = item.quantity;
        // Narx va miqdorni ko'paytirib, umumiy qiymatga qo'shish (agar noto'g'ri bo'lsa, 0 qo'shish)
        return total + (price * quantity || 0);
      }, 0); // Boshlang'ich umumiy qiymat sifatida 0 dan boshlash
    },
  },
});
