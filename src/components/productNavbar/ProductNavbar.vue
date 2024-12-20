<template>
  <div>
    <ul class="flex items-center justify-center space-x-[35px]">
      <li
        v-for="item in tagNavbar"
        :key="item.id"
        @click="handleClick(item.id)"
        :class="{
          ' text-[#46A358] border-b-[2px] border-[#46A358]':
            selectedTagId === item.id,
          'cursor-pointer': true,
        }"
        class="hover:text-[#46A358] transition-colors leading-[16px]"
      >
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'TagNavbar',
  computed: {
    ...mapState(['tagNavbar', 'selectedTagId']),
  },
  methods: {
    handleClick(tagId) {
      this.$store.commit('setSelectedTagId', tagId);
    },
  },
  mounted() {
    this.$store.dispatch('fetchTagNavbar');
  },
};
</script>

<style scoped></style>
