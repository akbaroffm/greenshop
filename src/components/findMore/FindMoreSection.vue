<template>
  <div
    class="px-2 md:px-0 pt-[94px] flex flex-wrap md:flex-nowrap gap-y-[28px] md:gap-y-0 justify-between gap-x-[28px]"
  >
    <div
      v-for="(item, index) in summerItems"
      :key="index"
      class="flex flex-col md:flex-row items-center md:items-start text-center md:text-right w-full md:w-auto"
    >
      <img :alt="item.alt" :src="item.src" width="292" height="292" />
      <div
        class="mt-[16px] md:mt-0 md:ml-[28px] w-full md:w-auto md:flex md:flex-col md:items-end"
      >
        <h3
          class="text-[20px] leading-[32px] font-extrabold pb-[16px] uppercase"
        >
          {{ item.title }}
        </h3>
        <p class="text-[16px] leading-[28px] pb-[20px]">
          {{ item.description }}
        </p>
        <button
          class="text-white w-full md:w-auto px-[20px] py-[12px] bg-[#46A358] hover:bg-[#4ab35f] duration-300 cursor-pointer rounded-[6px] flex items-center justify-center mx-auto md:mx-0"
        >
          Find More
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import summerCactus from "../../assets/images/summerCactus.png";
import summerCactus2 from "../../assets/images/summerCactus2.png";

export default {
  data() {
    return {
      summerItems: [
        {
          src: summerCactus,
          alt: "summer",
          title: "Summer cactus & succulents",
          description:
            "We are an online plant shop offering a wide range of cheap and trendy plants",
        },
        {
          src: summerCactus2,
          alt: "styled",
          title: "Styling Trends & much more",
          description:
            "We are an online plant shop offering a wide range of cheap and trendy plants",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Add custom styles if needed */
</style>
