<template>
  <div class="p-5">
    <h2 class="text-[18px] leading-[18px] font-bold">Categories</h2>
    <ul class="flex flex-col px-3 mt-3">
      <li
        v-for="category in categories"
        :key="category.id"
        @click="selectCategory(category.id)"
        :class="{
          'font-bold text-[#46A52A] ': selectedCategoryId === category.id,
        }"
        class="cursor-pointer flex justify-between leading-[40px]"
      >
        <span>{{ category.title }}</span>
        <span>({{ category.count }})</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Categories',
  computed: {
    ...mapState(['categories', 'selectedCategoryId']),
  },
  methods: {
    selectCategory(categoryId) {
      this.$store.commit('setSelectedCategoryId', categoryId);
    },
  },
  mounted() {
    this.$store.dispatch('fetchCategories');
  },
};
</script>

<style></style>
