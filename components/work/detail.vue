<script setup lang="ts">
const props = defineProps<{
  name: string;
  timeline: string;
  role: string;
  img: string;
}>();
</script>
<template>
  <div class="flex flex-col gap-8 w-full mx-auto container">
    <div
      class="text-semibold tracking-wider text-3xl text-center font-semibold"
    >
      {{ name }}
    </div>
    <hr class="w-full mx-auto h-1 bg-blend-lighten md:w-5/6" />
    <div class="mx-auto w-3/4">
      <p class="flex justify-between">
        <span class="text-semibold font-semibold">Timeline</span>
        <span>{{ timeline }}</span>
      </p>
      <p class="flex justify-between">
        <span class="text-semibold font-semibold">My Role</span>
        <span>{{ role }}</span>
      </p>
    </div>
    <img
      :src="img"
      class="w-full outline-slate-200 outline-1 outline mx-auto object-cover h-auto rounded-xl"
    />
    <div class="w-full md:w-5/6 break-normal mx-auto text-pretty">
      <slot></slot>
    </div>
  </div>
</template>
