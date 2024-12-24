<template>
  <div class="py-[25px]">
    <div class="container mx-auto">
      <Navbar />
      <RouterView />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>

<style>
.container {
  max-width: 1300px;
}
</style>
