<template>
  <div class="container mx-auto p-8">
    <!-- Breadcrumb -->
    <div class="mb-8">
      <nav class="flex" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
          <li>
            <a href="/" class="text-gray-600 hover:text-[#46A56A]">Home</a>
          </li>
          <li class="flex items-center">
            <span class="mx-2">/</span>
            <a href="/shop" class="text-gray-600 hover:text-[#46A56A]">Shop</a>
          </li>
        </ol>
      </nav>
    </div>

    <div v-if="loading" class="text-center py-12">
      <p class="text-lg">Loading product details...</p>
    </div>

    <div v-else-if="error" class="text-center text-red-500 py-12">
      <p class="text-lg">{{ error }}</p>
    </div>

    <div v-else-if="product" class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div class="flex flex-row gap-4 space-x-[50px]">
        <div class="thumbnails flex flex-col gap-4">
          <button
            v-for="(image, index) in product.images"
            :key="index"
            class="w-20 h-20 border-2 rounded-lg overflow-hidden"
            :class="{ 'border-[#46A56A]': selectedImageIndex === index }"
            @click="selectedImageIndex = index"
          >
            <img
              :src="image"
              :alt="`${product.title} - ${index + 1}`"
              class="w-full h-full object-contain"
            />
          </button>
        </div>

        <div class="main-image relative">
          <img
            :src="mainImage"
            :alt="product.title"
            class="w-[500px] h-[500px] object-contain rounded-lg"
          />
        </div>
      </div>

      <!-- Product Info -->
      <div class="product-info">
        <h1 class="text-3xl font-bold mb-2">{{ product.title }}</h1>

        <!-- Price and Reviews -->
        <div class="flex items-center justify-between mb-6">
          <span class="text-2xl text-[#46A56A] font-bold">{{
            product.price
          }}</span>
          <div class="flex items-center gap-2">
            <span class="text-gray-600"
              >{{ product.review }} Customer Review</span
            >
          </div>
        </div>

        <!-- Description -->
        <div class="mb-6">
          <h2 class="font-semibold mb-2">Short Description:</h2>
          <p class="text-gray-600">{{ product.description?.short }}</p>
        </div>

        <!-- Size Selection -->
        <div class="mb-6">
          <h2 class="font-semibold mb-2">Size:</h2>
          <div class="flex gap-3">
            <button
              v-for="size in ['S', 'M', 'L', 'XL']"
              :key="size"
              class="w-10 h-10 rounded-full border-2 flex items-center justify-center"
              :class="
                selectedSize === size
                  ? 'border-[#46A56A] text-[#46A56A]'
                  : 'border-gray-300'
              "
              @click="selectedSize = size"
            >
              {{ size }}
            </button>
          </div>
        </div>

        <!-- Quantity and Actions -->
        <div class="flex items-center gap-4 mb-6">
          <div class="flex items-center border rounded-md">
            <button
              class="px-4 py-2 text-xl active:text-[#46A56A]"
              @click="decrementQuantity"
            >
              -
            </button>
            <span class="px-4 py-2">{{ quantity }}</span>
            <button
              class="px-4 py-2 text-xl active:text-[#46A56A]"
              @click="incrementQuantity"
            >
              +
            </button>
          </div>
          <button
            class="bg-[#46A56A] text-white px-6 py-2 rounded-md hover:bg-[#46A56A]"
          >
            BUY NOW
          </button>
          <button
            @click="addToCart(product)"
            class="border border-[#46A56A] text-[#46A56A] px-6 py-2 rounded-md"
          >
            ADD TO CART
          </button>
          <button
            class="p-2 rounded-full border border-gray-300 hover:border-red-500 hover:text-red-500"
          >
            <font-awesome-icon icon="heart" />
          </button>
        </div>

        <!-- SKU and Categories -->
        <div class="text-sm text-gray-600">
          <p>SKU: {{ product.skuNumber }}</p>
          <p>Categories: {{ product.categoryName }}</p>
          <p>Tags: {{ product.tagName }}</p>
        </div>
      </div>
    </div>

    <!-- Full Description -->
    <div v-if="product" class="mb-2 w-full">
      <h2 class="font-semibold mb-2">Description:</h2>
      <p class="text-gray-600">{{ product.description?.full }}</p>
    </div>
    <div v-if="product" class="mb-2 w-full">
      <h2 class="font-semibold mb-2">Living Room:</h2>
      <p class="text-gray-600">{{ product.description?.livingRoom }}</p>
    </div>
    <div v-if="product" class="mb-2 w-full">
      <h2 class="font-semibold mb-2">Dining Room:</h2>
      <p class="text-gray-600">{{ product.description?.diningRoom }}</p>
    </div>
    <div v-if="product" class="mb-2 w-full">
      <h2 class="font-semibold mb-2">Office:</h2>
      <p class="text-gray-600">{{ product.description?.office }}</p>
    </div>

    <div v-else class="text-center py-12">
      <p class="text-lg">No product found</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

const route = useRoute();
const store = useStore();

// Reaktiv o'zgaruvchilarni aniqlash
const product = ref(null); // Mahsulot ma'lumotlarini saqlaydi
const loading = ref(true); // Yuklanish holatini ko'rsatadi
const error = ref(null); // Xato xabarlarini saqlaydi
const selectedSize = ref("S"); // Tanlangan o'lchamni saqlaydi
const quantity = ref(1); // Sotib olinadigan mahsulot miqdorini saqlaydi
const selectedImageIndex = ref(0); // Hozirgi tanlangan rasm indeksini saqlaydi

// Mahsulotni savatga qo'shish funksiyasi
const addToCart = (product) => {
  store.dispatch("addToCart", { product, quantity }); // Vuex do'konida mahsulotni savatga qo'shish uchun harakatni yuborish
  alert("Mahsulot savatga qo'shildi"); // Foydalanuvchiga mahsulot qo'shilgani haqida xabar berish
};

// Tanlangan rasm indeksiga asoslangan asosiy rasmni olish uchun hisoblangan xususiyat
const mainImage = computed(
  () => product.value?.images[selectedImageIndex.value]
);

// API dan mahsulot ma'lumotlarini olish funksiyasi
const fetchProduct = async (id) => {
  loading.value = true; // Ma'lumotlarni olish vaqtida yuklanishni haqiqatga aylantirish
  error.value = null; // Xato holatini tiklash
  try {
    const response = await fetch(
      `https://f77a51255486f515.mokky.dev/products/${id}`
    );
    if (!response.ok) {
      throw new Error("Failed"); // Agar javob yomon bo'lsa, xato chiqarish
    }
    product.value = await response.json(); // Mahsulot ma'lumotlarini JSON formatida olish
  } catch (err) {
    console.error("Xato", err); // Xatoni konsolga chiqarish
  } finally {
    loading.value = false; // Ma'lumotlar olish tugagach yuklanishni to'xtatish
  }
};

// Mahsulot miqdorini oshirish funksiyasi
const incrementQuantity = () => {
  quantity.value++; // Mahsulot miqdorini 1 ga oshirish
};

// Mahsulot miqdorini kamaytirish funksiyasi
const decrementQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--; // Agar miqdor 1 dan katta bo'lsa, 1 ga kamaytirish
  }
};

// Komponent yuklanganda mahsulot ma'lumotlarini olish
onMounted(() => {
  const productId = route.params.id; // Route parametridan mahsulot ID sini olish
  fetchProduct(productId); // Mahsulot ma'lumotlarini olish
});
</script>
