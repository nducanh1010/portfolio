<template>
  <div
    class="bg-white p-6 rounded-md shadow-lg shadow-slate-200 box-border"
    v-motion
    :initial="{
      scale: 1,
      boxShadow: ' 0px 2px 0px 0px rgba(0, 0, 255, .2)'
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
    <!-- <div
      class="w-full rounded-sm aspect-video bg-[url('/test.png')] bg- bg-no-repeat bg-center mb-2"
    ></div> -->
    <img
        src="/test.png"
        class="object-cover object-center w-full rounded-sm  mb-6  aspect-video"
      />
    <div>
      <div class="mb-4 font-semibold text-2xl">Weeklify</div>
      <div class="text-primary">AI-powered calendar application</div>
    </div>
  </div>
</template>
