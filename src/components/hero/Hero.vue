<script setup>
import { ref } from 'vue';
import Hero from '../../assets/images/hero-planet.png';
import Button from '../Button/button.vue';

const slides = ref([
  {
    title: "Let's Make a Better",
    highlight: 'Planet',
    description:
      'We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create a unique Urban Jungle. Order your favorite plants!',
  },
  {
    title: 'Grow Your Own',
    highlight: 'Garden',
    description:
      'Discover the joy of nurturing your own plants. From seeds to blooming beauties, we have everything you need to start your green journey.',
  },
  {
    title: 'Breathe Fresh',
    highlight: 'Air',
    description:
      'Improve your indoor air quality with our selection of air-purifying plants. Create a healthier living space with the power of nature.',
  },
]);
</script>

<template>
  <div class="carousel-container bg-[#fafafa] pl-[40px] mt-[20px] relative">
    <el-carousel
      :interval="5000"
      indicator-position="bottom"
      height="450px"
      :autoplay="true"
      pause-on-hover
    >
      <el-carousel-item v-for="(slide, index) in slides" :key="index">
        <div class="flex justify-between">
          <div class="w-[550px] pt-[70px]">
            <p
              class="font-[500] leading-[16px] text-[14px] uppercase text-[#3d3d3d] tracking-[2px] pb-[5px]"
            >
              Welcome to GreenShop
            </p>
            <h1
              class="text-[#3d3d3d] text-[70px] leading-[70px] font-[700] uppercase pb-[7px]"
            >
              {{ slide.title }}
              <span class="text-[#46A358]">{{ slide.highlight }}</span>
            </h1>
            <p class="text-[14px] text-[#727272] leading-[24px]">
              {{ slide.description }}
            </p>
            <Button class="py-[10px] px-[25px] mt-[45px]">SHOP NOW</Button>
          </div>
          <div>
            <img
              :src="Hero"
              :alt="`Welcome to GreenShop - ${slide.title}`"
              class="object-cover w-[500px] h-auto mt-[-40px]"
            />
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped>
.carousel-container :deep(.el-carousel__indicators) {
  bottom: 20px;
}

.carousel-container :deep(.el-carousel__indicator) {
  padding: 0 4px;
}

.carousel-container :deep(.el-carousel__button) {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #46a358;
  opacity: 0.5;
}

.carousel-container
  :deep(.el-carousel__indicator.is-active .el-carousel__button) {
  opacity: 1;
}
</style>
