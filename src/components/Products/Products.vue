<template>
  <div>
    <div class="products p-5">
      <div
        v-for="product in filteredProducts"
        :key="product.id"
        @click="DetailPage(product)"
        class="product-card flex flex-col items-center bg-[#fafafa] p-4 cursor-pointer hover:border-t hover:border-[#46A52A]"
      >
        <div class="relative">
          <img
            :src="product.images[0]"
            alt="Product"
            class="object-cover w-full h-40 rounded-t-md"
          />
          <!-- <div class="icon-container">
            <font-awesome-icon icon="heart" style="color: red" />
          </div> -->
        </div>
        <div class="flex flex-col items-start pt-5">
          <h3 class="mt-4 text-base">{{ product.title }}</h3>
          <span class="text-[#46A52A] font-bold">{{ product.price }}</span>
        </div>
      </div>
    </div>
    <div class="flex justify-end">
      <el-pagination
        background
        size="small"
        layout="prev, pager, next"
        :total="50"
        class="mt-4"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"; // Vuex dan getterlarni xaritalash uchun mapGetters ni import qilish

export default {
  name: "ProductList", // Komponent nomi
  computed: {
    ...mapGetters(["filteredProducts"]), // Vuex store dan filtrlangan mahsulotlarni olish
  },
  mounted() {
    this.$store.dispatch("fetchProducts"); // Komponent yuklanganda mahsulotlarni olish uchun harakat yuborish
  },
  methods: {
    // Mahsulot tafsilotlari sahifasiga o'tish funksiyasi
    DetailPage(product) {
      this.$router.push(`/shop/${product.id}`); // Foydalanuvchini tanlangan mahsulotning tafsilotlari sahifasiga yo'naltirish
    },
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
  border-top: 2px solid transparent;
  transition: border-color 0.3s ease;
}
.product-card:hover {
  border-top: 2px solid #46a52a;
}

.icon-container {
  display: flex;
  gap: 10px;
  position: absolute;
  bottom: -30px;
  left: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.product-card:hover .icon-container {
  opacity: 1;
  transform: translateY(0);
}
.icon {
  color: #46a52a;
}
</style>
