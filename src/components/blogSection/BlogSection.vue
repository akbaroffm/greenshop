<template>
  <div class="mt-[138px] px-4">
    <h2
      class="text-center font-bold text-[30px] leading-[36px] text-[#3D3D3D] pb-[15px]"
    >
      Our Blog Posts
    </h2>
    <p
      class="text-center font-normal text-[16px] leading-[24px] text-[#727272] pb-[35px]"
    >
      We are an online plant shop offering a wide range of cheap and trendy
      plants.
    </p>
    <div class="flex flex-wrap justify-between">
      <div
        v-for="(src, index) in blogImages"
        :key="index"
        class="w-full sm:w-[268px] flex-shrink-0 bg-[#fafafa]"
      >
        <img :src="src" alt="image" class="w-full" width="268" height="195" />
        <span class="block pt-[9px] pe-[11px] pb-[12px] ps-[15px]">
          <p
            class="text-[#46A358] font-medium text-[14px] leading-[16px] pb-[4px]"
          >
            September 12 | Read in 6 minutes
          </p>
          <h4
            class="font-bold text-[20px] leading-[26px] text-[#3D3D3D] pb-[4px]"
          >
            Cactus & Succulent Care Tips
          </h4>
          <p
            class="font-normal text-[14px] leading-[22px] text-[#727272] pb-[9px]"
          >
            Cacti and succulents are easy plants for any home or patio.
          </p>
          <button
            class="duration-200 cursor-pointer hover:text-[#46A358] flex items-center"
          >
            Read More
          </button>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import blogPost from "../../assets/images/blogPost.png";
import blogPost2 from "../../assets/images/blogPost2.png";
import blogPost3 from "../../assets/images/blogPost3.png";
import blogPost4 from "../../assets/images/blogPost4.png";
export default {
  data() {
    return {
      blogImages: [blogPost, blogPost2, blogPost3, blogPost4],
    };
  },
};
</script>

<style scoped>
/* Add your custom styles here if needed */
</style>
