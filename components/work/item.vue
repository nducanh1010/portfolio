<script setup lang="ts">
const props = defineProps<{
  name: string;
  title: string;
  link: string;
  img: string;
}>();
</script>
<template>
  <div
    class="basis-[calc(50%-8px)] relative bg-white p-6 rounded-md shadow-lg shadow-slate-200 box-border"
    v-motion
    :initial="{
      scale: 1,
      boxShadow: ' 0px 2px 0px 0px rgba(0, 0, 255, .2)',
      transition: {
        duration: 300,
        type: 'spring',
        stiffness: 80
      }
    }"
    :hovered="{
      boxShadow:
        '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      scale: 1.01,
      transition: {
        duration: 300,
        type: 'spring',
        stiffness: 80
      }
    }"
  >
    <NuxtLink :to="link">
      <!-- <div
      class="w-full rounded-sm aspect-video bg-[url('/test.png')] bg- bg-no-repeat bg-center mb-2"
    ></div> -->
      <img
        :src="img"
        class="object-scale-down object-center w-full rounded-sm mb-6 aspect-video"
      />
      <div>
        <div class="mb-4 font-semibold text-xl">{{ name }}</div>
        <div class="text-primary">{{ title }}</div>
      </div>

      <!-- <i
        class="devicon-github-original text-2xl text-slate-400 top-0 right-2 absolute"
      ></i> -->
      <div class=" w-9/12 items-center flex justify-end  absolute bottom-0">
        <i class="devicon-github-original"></i>
        <object
          data="/portfolio/arrow-up-right-from-square.svg"
          type="image/svg+xml"
          class="aspect-square w-4"
        ></object>
      </div>
    </NuxtLink>
  </div>
</template>
