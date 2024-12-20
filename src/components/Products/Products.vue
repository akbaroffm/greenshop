<template>
  <div>
    <div class="products p-5">
      <div
        v-for="product in filteredProducts"
        :key="product.id"
        class="product-card flex flex-col items-center bg-[#fafafa] p-4"
      >
        <div class="relative">
          <img
            :src="product.images[0]"
            alt="Product"
            class="object-cover w-full h-40 rounded-t-md"
          />
        </div>
        <div class="flex flex-col items-start">
          <h3 class="mt-4 text-base">
            {{ product.title }}
          </h3>
          <span class="text-[#46A52A] font-bold"> {{ product.price }} </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ProductList',
  computed: {
    ...mapGetters(['filteredProducts']),
  },
  mounted() {
    this.$store.dispatch('fetchProducts');
  },
};
</script>

<style>
.products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
  justify-items: start;
}
.product-card {
  width: 100%;
  max-width: 260px;
}
</style>
