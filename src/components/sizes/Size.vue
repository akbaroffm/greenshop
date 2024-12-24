<template>
  <div class="p-5">
    <h2 class="text-[18px] leading-[18px] font-bold">Size</h2>
    <ul class="flex flex-col px-3 mt-3">
      <li
        class="cursor-pointer flex justify-between leading-[40px]"
        v-for="size in sizes"
        :key="size.id"
        @click="selectSize(size.id)"
        :class="{ 'font-bold text-[#46A52A]': selectedSizeId === size.id }"
      >
        <span>{{ size.title }}</span>
        <span>({{ size.count }})</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Sizes",
  computed: {
    ...mapState(["sizes", "selectedSizeId"]),
  },
  methods: {
    selectSize(sizeId) {
      this.$store.commit("setSelectedSizeId", sizeId);
    },
  },
  mounted() {
    this.$store.dispatch("fetchSizes");
  },
};
</script>

<style></style>
