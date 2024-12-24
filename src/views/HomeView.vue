<template>
  <div>
    <Hero />
    <div class="mt-10">
      <ProductNavbar class="" />
      <div class="flex">
        <div class="w-1/4 bg-[#fafafa]">
          <Categories class="" />
          <!-- <div>
            <h2>Price range</h2>
            <input
              type="range"
              v-model="minPrice"
              :min="0"
              :max="1000"
              @input="updatePriceRange"
            />
            <input
              type="range"
              v-model="maxPrice"
              :min="0"
              :max="1000"
              @input="updatePriceRange"
            />
            <p>Min: ${{ minPrice }} - Max: ${{ maxPrice }}</p>
          </div> -->
          <Size />
        </div>
        <div class="w-3/4">
          <Products />
        </div>
      </div>
      <FindMore />
      <BlogSection />
      <FooterSection />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Size from "../components/sizes/Size.vue";
import Categories from "../components/categories/Categories.vue";
import ProductNavbar from "../components/productNavbar/ProductNavbar.vue";
import Products from "../components/Products/Products.vue";
import Hero from "../components/hero/Hero.vue";
import FindMore from "../components/findMore/FindMoreSection.vue";
import BlogSection from "../components/blogSection/BlogSection.vue";
import FooterSection from "../components/footerSection/footerSection.vue";

export default {
  components: {
    Hero,
    ProductNavbar,
    Categories,
    Size,
    Products,
    FindMore,
    BlogSection,
    FooterSection,
  },
  setup() {
    const minPrice = ref(0);
    const maxPrice = ref(1000);

    const updatePriceRange = () => {
      this.$store.commit("setPriceRange", {
        min: minPrice.value,
        max: maxPrice.value,
      });
    };

    return {
      minPrice,
      maxPrice,
      updatePriceRange,
    };
  },
};
</script>

<style></style>
