<template>
  <span class="flex items-center">
    <span class="h-px flex-1 bg-primary opacity-45"></span>
  </span>
  <div
    class="flex flex-col md:flex-row md:justify-between items-center gap-4 my-16"
  >
    <div class="text-sm">© {{ new Date().getFullYear() }} Made by Dominik Thiem</div>
    <div class="flex gap-4 box-border">
      <a target="_blank" href="https://github.com/nducanh1010/">
        <img src="/github.png" class="aspect-square w-5 object-contain"
      /></a>
      <a target="_blank" href="https://t.me/ducanhnh">
        <img src="/telegram.png" class="aspect-square w-5 object-contain"
      /></a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/duc-anh-nguyen-793b7a273/"
      >
        <img src="/linkedin.png" class="aspect-square w-5 object-contain"
      /></a>
    </div>
  </div>
</template>
