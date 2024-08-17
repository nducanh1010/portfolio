<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    name: string;
    timeline: string;
    role: string;
    link: string;
    img: string;
    colorHex?: string;
  }>(),
  {
    colorHex: () => "#E11D48"
  }
);
</script>
<template>
  <NuxtLink :to="link">
    <div
      class="bg-white p-8 rounded-md xs:w-full md:w-[95%] mx-auto shadow-lg shadow-slate-200 box-border"
      v-motion
      :initial="{
        scale: 1,
        boxShadow: '0 0 #0000',
        transition: {
          duration: 400,
          type: 'spring',
          stiffness: 80
        }
      }"
      :hovered="{
        boxShadow:
          '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        scale: 1.01,
        transition: {
          duration: 400,
          type: 'spring',
          stiffness: 80
        }
      }"
    >
      <img :src="img" class="object-cover object-center w-full aspect-video" />
      <div
        class="flex w-full flex-col gap-7 md:gap-0 md:flex-row md:aspect-[16/5]"
      >
        <div class="basis-1/2 flex flex-col gap-2 md:items-start">
          <div
            :style="`text-decoration-color:${colorHex}`"
            class="text-2xl mt-4 font-semibold decoration-4 text-semibold underline-offset-8 underline"
          >
            {{ name }}
          </div>
          <div class="text-primary text-sm">{{ role }}</div>
          <div class="text-primary text-sm">{{ timeline }}</div>

          <slot name="stack"></slot>
        </div>
        <div class="basis-1/2 flex items-end leading-relaxed text-sm">
          <slot> </slot>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
