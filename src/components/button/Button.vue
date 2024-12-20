<template>
  <button
    class="bg-[#46A358] rounded-[6px] text-white font-[600]"
    :disabled="isDisabled"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event);
    },
  },
};
</script>
