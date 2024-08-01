<template>
  <Header />

  <div class="bg-[#fafafa] w-full box-border mx-auto">
    <div
      class="w-full break-normal md:w-1/2 mx-auto px-4 pt-[calc(theme(spacing.6)*2+theme(spacing.3)*3)] "
    >
      <NuxtPage />

      <div class="mt-16"><Footer /></div>
    </div>
  </div>
</template>
<script setup lang="ts">
const title = ref("Per");

useSeoMeta({
  title,
  description: () => `description: ${title.value}`
});
</script>
<style>
body {
  background-color: #fafafa;
}
</style>
