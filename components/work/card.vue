<script setup lang="ts">
// const props=defineProps<{

// }>
</script>
<template>
  <div
    class="bg-white p-8 rounded-md shadow-lg shadow-slate-200 box-border"
    v-motion
    :initial="{
      scale: 1,
      boxShadow: '0 0 #0000'
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
    <div
      class="w-full rounded-sm aspect-video bg-[url('/test.png')] bg-contain bg-no-repeat bg-center mb-12"
    ></div>
    <!-- <img
        src="/test.png"
        class="object-cover object-center w-full aspect-video"
      /> -->
    <div
      class="flex w-full flex-col gap-7 md:gap-0 md:flex-row md:aspect-[16/5]"
    >
      <div class="basis-1/2 flex flex-col gap-2 md:items-start">
        <div
          class="text-2xl font-semibold decoration-4 text-semibold underline-offset-8 underline decoration-[#E11D48]"
        >
          Weeklify
        </div>
        <div class="text-primary">Senior Product Designer</div>
        <div class="text-primary">2022 - Present</div>
      </div>
      <div class="basis-1/2 flex items-end">
        At Weeklify, I design exceptional user experiences for our AI-powered
        calendar application, collaborating with cross-functional teams to
        ensure our product meets business goals and exceeds user expectations.
      </div>
    </div>
  </div>
</template>
