<template>
  <footer class="container bg-white">
    <div class="mt-[100px] bg-[#FBFBFB]">
      <div
        class="p-6 flex flex-wrap items-center gap-8 md:flex-nowrap md:gap-x-16"
      >
        <div
          v-for="(item, index) in footerSections"
          :key="index"
          class="w-full md:w-auto text-center md:text-left border-b md:border-b-0 md:border-r border-[#46a3594e] pb-4 md:pb-0 md:pr-6"
        >
          <img
            :src="item.imgSrc"
            :alt="item.title"
            class="mx-auto w-[80px] md:mx-0"
          />
          <h4 class="font-bold text-lg mt-4">{{ item.title }}</h4>
          <p class="text-sm text-gray-600 mt-2 md:w-56">
            {{ item.description }}
          </p>
        </div>
        <div class="max-w-[354px] w-full md:w-auto text-center md:text-left">
          <h4 class="font-bold text-lg mt-4 md:whitespace-nowrap">
            Join Our Newsletter
          </h4>
          <div class="flex mt-4 shadow rounded-[6px]">
            <input
              type="email"
              placeholder="Enter your email address"
              class="w-full p-2 rounded-l-[6px] outline-none"
            />
            <button
              class="bg-[#46A358] duration-200 cursor-pointer text-white p-2 rounded-r-[6px] w-[85px] hover:bg-[#52b666]"
            >
              Join
            </button>
          </div>
          <p class="text-sm text-gray-600 mt-2">
            We usually post offers and challenges in newsletters. We’re your
            online houseplant destination.
          </p>
        </div>
      </div>
    </div>

    <div class="border-t border-gray-200 my-8"></div>

    <div
      class="flex flex-col items-center justify-center md:flex-row md:justify-start space-y-[10px] md:space-x-[140px] bg-[#46A3581A] p-4"
    >
      <img
        src="../../assets/images/logo.svg"
        alt="greenshop logo"
        class="w-[150px] h-[34px]"
      />
      <div
        v-for="(contact, index) in contactInfo"
        :key="index"
        class="flex flex-col md:flex-row md:space-x-[5px] text-center"
      >
        <img :src="contact.icon" :alt="contact.text" class="mx-auto md:mx-0" />
        <p
          class="max-w-[176px] flex items-center text-sm text-gray-600 mb-2 md:mb-0"
        >
          {{ contact.text }}
        </p>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
      <div
        v-for="(section, index) in footerLinks"
        :key="index"
        class="text-center md:text-left"
      >
        <h4 class="font-bold text-lg">{{ section.title }}</h4>
        <ul class="mt-4 space-y-2">
          <li
            v-for="(link, linkIndex) in section.links"
            :key="linkIndex"
            class="text-sm text-gray-600 flex items-center"
          >
            <div class="flex space-x-4 justify-start" v-if="link.imgSrc">
              <img :src="link.imgSrc" :alt="link.alt" class="w-5 h-5" />
            </div>
            <span v-else>{{ link }}</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="text-center text-sm text-gray-600 mt-8">
      © 2021 GreenShop. All Rights Reserved.
    </div>
  </footer>
</template>

<script>
// Import social media icons and other data
import GardenCare from "../../assets/images/garden.svg";
import PlantRenovation from "../../assets/images/plant.svg";
import Watering from "../../assets/images/watering.svg";
import Location from "../../assets/images/location.svg";
import Gmail from "../../assets/images/message.svg";
import Phone from "../../assets/images/calling.svg";
import Facebook from "../../assets/images/facebok.svg";
import Instagram from "../../assets/images/insta.svg";
import Twitter from "../../assets/images/twitter.svg";
import Ln from "../../assets/images/ln.svg";
import Youtube from "../../assets/images/union.svg";

export default {
  data() {
    return {
      footerSections: [
        {
          title: "Garden Care",
          description:
            "We are an online plant shop offering a wide range of cheap and trendy plants.",
          imgSrc: GardenCare,
        },
        {
          title: "Plant Renovation",
          description:
            "We are an online plant shop offering a wide range of cheap and trendy plants.",
          imgSrc: PlantRenovation,
        },
        {
          title: "Watering Garden",
          description:
            "We are an online plant shop offering a wide range of cheap and trendy plants.",
          imgSrc: Watering,
        },
      ],
      contactInfo: [
        {
          icon: Location,
          text: "70 West Buckingham Ave., Farmingdale, NY 11735",
        },
        {
          icon: Gmail,
          text: "contact@greenshop.com",
        },
        {
          icon: Phone,
          text: "+88 01911 717 490",
        },
      ],
      footerLinks: [
        {
          title: "My Account",
          links: [
            "My Account",
            "Our stores",
            "Contact us",
            "Career",
            "Specials",
          ],
        },
        {
          title: "Help & Guide",
          links: [
            "Help Center",
            "How to Buy",
            "Shipping & Delivery",
            "Product Policy",
            "How to Return",
          ],
        },
        {
          title: "Categories",
          links: [
            "House Plants",
            "Potter Plants",
            "Seeds",
            "Small Plants",
            "Accessories",
          ],
        },
        {
          title: "Social Media",
          links: [
            { imgSrc: Facebook, alt: "facebook" },
            { imgSrc: Instagram, alt: "instagram" },
            { imgSrc: Twitter, alt: "twitter" },
            { imgSrc: Ln, alt: "linkedin" },
            { imgSrc: Youtube, alt: "youtube" },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Add any specific styles if needed */
</style>
