<template>
  <div class="pt-[35px]">
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
      <li class="flex items-center">
        <span class="mx-2">/</span>
        <a href="/checkout" class="text-gray-600 hover:text-[#46A56A]"
          >Checkout</a
        >
      </li>
    </ul>
    <h2 class="text-[#3D3D3D] text-[17px] leading-[16px] font-bold">
      Billing Address
    </h2>
    <div v-if="cart.length === 0" class="text-center">
      <p>No products to checkout</p>
    </div>
    <div v-else class="flex gap-8 pt-[35px]">
      <!-- Billing Address Section -->
      <div class="w-[70%]">
        <form
          class="flex justify-between"
          @submit.prevent="validateAndPlaceOrder"
        >
          <div class="w-[48%] space-y-[20px]">
            <InputField
              v-model="form.firstName"
              label="First Name *"
              id="name"
              type="text"
            />

            <InputField
              v-model="form.email"
              label="Email address *"
              id="email"
              type="email"
            />
            <label for="ordernotes" class="flex flex-col mt-5">
              Order notes (optional)
              <textarea
                v-model="form.orderNotes"
                id="ordernotes"
                rows="5"
                class="border border-[#eaeaea] outline-none rounded-[3px] p-2 mt-2 w-full"
              ></textarea>
            </label>
          </div>
          <div class="w-[48%] space-y-[20px]">
            <InputField
              v-model="form.lastName"
              label="Last Name *"
              id="last"
              type="text"
            />

            <InputField
              v-model="form.phone"
              label="Phone Number *"
              id="phone"
              type="tel"
            />
          </div>
        </form>
      </div>

      <!-- Order section -->
      <div class="w-[30%] mt-[-50px]">
        <h3 class="text-lg font-semibold mb-4">Your Order</h3>
        <ul>
          <li
            v-for="product in cart"
            :key="product.id"
            class="flex justify-between items-center border-b border-gray-200 py-2"
          >
            <div>
              <img
                :src="product.images[0]"
                :alt="product.title"
                class="w-16 h-16 object-contain mr-4"
              />
            </div>
            <div>
              <h4 class="text-sm font-medium">{{ product.title }}</h4>
              <p class="text-xs text-gray-500">SKU: {{ product.skuNumber }}</p>
            </div>
            <p class="text-sm font-semibold text-gray-400">
              (x {{ product.quantity }})
            </p>
            <p class="text-[18px] leading-[16px] font-bold text-[#46A56A]">
              ${{
                (
                  parseFloat(product.price.replace(/[^0-9.]/g, "")) *
                  product.quantity
                ).toFixed(2)
              }}
              <!-- Narxni miqdor bilan ko'rsatish -->
            </p>
          </li>
        </ul>

        <div class="pt-10">
          <div
            class="flex justify-between text-[18px] leading-[16px] font-bold"
          >
            <span>Total</span>
            <span class="text-[#46A56A]">${{ total.toFixed(2) }}</span>
          </div>
        </div>

        <button
          @click="validateAndPlaceOrder"
          class="w-full bg-[#46A56A] text-white py-3 mt-6 rounded-lg text-sm font-medium hover:bg-green-700"
        >
          Place Order
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import InputField from "../../components/InputField/InputFiled.vue";

export default {
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        orderNotes: "",
      },
    };
  },
  components: {
    InputField,
  },
  computed: {
    cart() {
      // Savatchadagi mahsulotlar
      return this.$store.state.cart; // Vuex do'konidan savatchani olish
    },
    total() {
      // Umumiy narxni hisoblash
      return this.cart.reduce((total, item) => {
        const price = parseFloat(item.price.replace(/[^0-9.]/g, "")); // Mahsulot narxini raqamga aylantirish
        const quantity = item.quantity; // Mahsulot miqdori
        return total + (price * quantity || 0); // Umumiy narxni yangilash
      }, 0);
    },
  },
  methods: {
    validateAndPlaceOrder(event) {
      // Buyurtma berishdan oldin tekshirish
      event.preventDefault(); // Formaning standart yuborilishini to'xtatish
      const requiredFields = ["firstName", "lastName", "email", "phone"]; // Majburiy maydonlar ro'yxati
      const emptyFields = requiredFields.filter(
        (field) => !this.form[field].trim() // Bo'sh maydonlarni aniqlash
      );

      if (emptyFields.length > 0) {
        // Agar bo'sh maydonlar mavjud bo'lsa
        alert("Iltimos, barcha majburiy maydonlarni to'ldiring."); // Ogohlantirish
        return; // Funksiyani to'xtatish
      }

      if (this.cart.length === 0) {
        // Agar savatcha bo'sh bo'lsa
        alert(
          "Sizning savatchangiz bo'sh. Iltimos, buyurtma berishdan oldin mahsulotlarni qo'shing." // Ogohlantirish
        );
        return; // Funksiyani to'xtatish
      }

      this.placeOrder(); // Buyurtmani berish
    },
    placeOrder() {
      // Buyurtma berish funksiyasi
      alert("Sizning buyurtmangiz berildi!"); // Muvaffaqiyatli ogohlantirish
      console.log(this.form); // Forma ma'lumotlarini konsolga chiqarish
      console.log(this.cart); // Savatcha ma'lumotlarini konsolga chiqarish
    },
  },
};
</script>
