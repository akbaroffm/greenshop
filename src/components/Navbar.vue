<template>
  <div
    class="flex items-center justify-between border-b border-[#46A358] pb-[17px]"
  >
    <RouterLink to="/">
      <img :src="imageSrc" alt="logo" @click="toHomeHandler" />
    </RouterLink>
    <nav class="flex space-x-[50px] text-[#3d3d3d]">
      <RouterLink :to="{ name: '/' }">Home</RouterLink>
      <RouterLink :to="{ name: 'shop' }">Shop</RouterLink>
      <RouterLink :to="{ name: 'plants' }">Plan Care</RouterLink>
      <RouterLink :to="{ name: 'blogs' }">Blogs</RouterLink>
    </nav>
    <div class="flex space-x-[30px]">
      <button>
        <img :src="search" alt="search" width="20" height="20" />
      </button>
      <button @click="cartHandler">
        <img :src="shopping" alt="shopping" width="25" height="20" />
      </button>
      <Button
        class="py-[5px] px-[15px] flex items-center rounded-[6px] text-white"
        @click="onLoginClick"
      >
        <img :src="login" alt="login" class="pr-[4px]" />
        Login
      </Button>
    </div>
  </div>
</template>

<script>
import Logo from "../assets/images/logo.svg";
import Search from "../assets/images/search.svg";
import Shopping from "../assets/images/shopping.svg";
import Login from "../assets/images/logout.svg";
import Button from "./Button/button.vue";

export default {
  components: {
    Button,
  },
  data() {
    return {
      imageSrc: Logo,
      search: Search,
      shopping: Shopping,
      login: Login,
    };
  },
  methods: {
    cartHandler() {
      this.$router.push("/cart");
    },
    toHomeHandler() {
      this.$router.push("/");
    },
    onLoginClick() {
      this.$router.push({ name: "login" });
    },
  },
};
</script>
