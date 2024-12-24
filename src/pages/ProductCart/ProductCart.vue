<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
// Savatdagi mahsulotlarni olish uchun hisoblangan xususiyat
const cart = computed(() => store.getters.cartItems); // Store dan savatdagi mahsulotlar ro'yxatini olish

// Savatdagi mahsulotlar umumiy narxini olish uchun hisoblangan xususiyat
const cartTotal = computed(() => store.getters.cartTotal); // Store dan savatdagi mahsulotlar umumiy narxini olish

// Savatdan mahsulotni o'chirish funksiyasi
const removeFromCart = (item) => {
  store.dispatch("removeFromCart", { id: item.id, size: item.size }); // Vuex store ga mahsulotni o'chirish uchun harakat yuborish
};

// Mahsulot miqdorini oshirish funksiyasi
const incrementQuantity = (item) => {
  store.dispatch("updateCartItemQuantity", {
    // Vuex store ga mahsulot miqdorini yangilash uchun harakat yuborish
    id: item.id, // Mahsulot ID si
    size: item.size, // Mahsulot o'lchami
    quantity: item.quantity + 1, // Yangi miqdor (1 ga oshirilgan)
  });
};

// Mahsulot miqdorini kamaytirish funksiyasi
const decrementQuantity = (item) => {
  if (item.quantity > 1) {
    // Agar mahsulot miqdori 1 dan katta bo'lsa
    store.dispatch("updateCartItemQuantity", {
      // Vuex store ga mahsulot miqdorini yangilash uchun harakat yuborish
      id: item.id, // Mahsulot ID si
      size: item.size, // Mahsulot o'lchami
      quantity: item.quantity - 1, // Yangi miqdor (1 ga kamaytirilgan)
    });
  }
};
</script>

<template>
  <div class="container mx-auto p-8">
    <ul class="inline-flex items-center space-x-1 md:space-x-3 pb-[35px]">
      <li>
        <a href="/" class="text-gray-600 hover:text-[#46A56A]">Home</a>
      </li>
      <li class="flex items-center">
        <span class="mx-2">/</span>
        <a href="/shop" class="text-gray-600 hover:text-[#46A56A]">Shop</a>
      </li>
      <li class="flex items-center">
        <span class="mx-2">/</span>
        <a href="/cart" class="text-gray-600 hover:text-[#46A56A]">Cart</a>
      </li>
    </ul>
    <h2 class="text-2xl font-bold mb-4">Your Cart</h2>
    <div v-if="cart.length === 0">
      <p>No products in your cart</p>
    </div>
    <div v-else>
      <div
        v-for="item in cart"
        :key="`${item.id}-${item.size}`"
        class="flex items-center justify-between border-b py-4"
      >
        <div class="flex items-center">
          <img
            :src="item.images[0]"
            :alt="item.title"
            class="w-16 h-16 object-contain mr-4"
          />
          <div>
            <h3 class="font-semibold">{{ item.title }}</h3>
            <p class="text-gray-600">Size: {{ item.size }}</p>
            <p class="text-gray-600">Price: {{ item.price }}</p>
          </div>
        </div>
        <div class="flex items-center">
          <button
            @click="decrementQuantity(item)"
            class="px-2 py-1 border rounded-l"
          >
            -
          </button>
          <span class="px-4 py-1 border-t border-b">{{ item.quantity }}</span>
          <button
            @click="incrementQuantity(item)"
            class="px-2 py-1 border rounded-r"
          >
            +
          </button>
          <button @click="removeFromCart(item)" class="ml-4 text-red-500">
            Remove
          </button>
        </div>
      </div>
      <div class="mt-4 flex justify-between items-center">
        <p class="text-xl font-bold">Total: ${{ cartTotal.toFixed(2) }}</p>
        <router-link to="/checkout">
          <button class="bg-[#46A56A] text-white px-6 py-2 rounded-md">
            Proceed to Checkout
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>
