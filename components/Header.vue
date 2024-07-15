<template>
  <div
    class="nav-elevated z-10 w-full bg-[#fafafa] md:w-1/2 left-1/2 transform -translate-x-1/2 fixed border top-0 md:top-6 rounded-xl border-solid flex justify-between py-3 px-6 text-primary text-base font-medium"
  >
    <div class="flex grow items-center">
      <!-- <object
            data="/logo-view.svg"
            type="image/svg+xml"
            class="aspect-square w-5 "
          ></object> -->
      <img src="/image.png" class="w-5 h-5 object-contain text-gray-400 mr-2" />
      <NuxtLink href="/">
        <span class="ct-top-menu-item">Duc Anh</span></NuxtLink
      >
    </div>
    <div class="flex gap-6 px-2">
      <NuxtLink href="/work" class="ct-top-menu-item"
        ><div>Work</div>
      </NuxtLink>
      <NuxtLink href="/about" class="ct-top-menu-item">
        <div>About</div></NuxtLink
      >
      <NuxtLink href="/contact" class="ct-top-menu-item">
        <div>Contact</div></NuxtLink
      >
    </div>
  </div>
</template>
<style scoped>
.nav-elevated {
  background: linear-gradient(145deg, #ffffff, #f6f6f6);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  transform: translateX(-50%) translateY(-2px);
}

.ct-top-menu-item {
  position: relative;
  transition: all 0.3s ease;
}

.ct-top-menu-item::after {
  content: "";
  position: absolute;
  height: 1px;
  bottom: 1px;
  background-color: currentColor;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.ct-top-menu-item:hover::after {
  transform: scaleX(1);
}
</style>
