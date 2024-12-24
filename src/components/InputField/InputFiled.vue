<template>
  <label :for="id" class="flex flex-col text-[#3D3D3D]">
    {{ label }}
    <input
      autocomplete="off"
      :placeholder="placeholder"
      :type="type"
      :id="id"
      v-model="model"
      class="border border-[#eaeaea] outline-none rounded-[3px] p-2 mt-2"
    />
  </label>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
    default: "",
  },
});

const model = defineModel();
</script>
