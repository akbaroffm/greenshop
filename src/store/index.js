import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    products: [],
    categories: [],
    sizes: [],
    tagNavbar: [],
    selectedCategoryId: null,
    selectedSizeId: null,
    selectedTagId: null,
    priceRange: { min: 0, max: Infinity },
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setCategories(state, categories) {
      state.categories = categories;
    },
    setSizes(state, sizes) {
      state.sizes = sizes;
    },
    setTagNavbar(state, tagNavbar) {
      state.tagNavbar = tagNavbar;
    },
    setSelectedCategoryId(state, id) {
      state.selectedCategoryId = id;
    },
    setSelectedSizeId(state, id) {
      state.selectedSizeId = id;
    },
    setSelectedTagId(state, id) {
      state.selectedTagId = id;
    },
    setPriceRange(state, range) {
      state.priceRange = range;
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const response = await axios.get(
          'https://f77a51255486f515.mokky.dev/products'
        );
        commit('setProducts', response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
    async fetchCategories({ commit }) {
      try {
        const response = await axios.get(
          'https://f77a51255486f515.mokky.dev/categories'
        );
        commit('setCategories', response.data[0].categories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    },
    async fetchSizes({ commit }) {
      try {
        const response = await axios.get(
          'https://f77a51255486f515.mokky.dev/filters'
        );
        commit('setSizes', response.data);
      } catch (error) {
        console.error('Error fetching sizes:', error);
      }
    },
    async fetchTagNavbar({ commit }) {
      try {
        const response = await axios.get(
          'https://f77a51255486f515.mokky.dev/navbar'
        );
        commit('setTagNavbar', response.data[0]['tag-navbar']);
      } catch (error) {
        console.error('Error fetching tag navbar:', error);
      }
    },
  },
  getters: {
    filteredProducts: (state) => {
      return state.products.filter((product) => {
        const matchesCategory =
          !state.selectedCategoryId ||
          product.categoryId === state.selectedCategoryId;
        const matchesSize =
          !state.selectedSizeId || product.sizeId === state.selectedSizeId;
        const matchesTag =
          !state.selectedTagId || product.tagId === state.selectedTagId;
        const price = parseFloat(product.price.replace('$', ''));
        const matchesPrice =
          price >= state.priceRange.min && price <= state.priceRange.max;
        return matchesCategory && matchesSize && matchesTag && matchesPrice;
      });
    },
  },
});
