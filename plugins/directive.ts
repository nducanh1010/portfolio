export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("lazy", {
    beforeMount(el) {
      el.classList.add("opacity-0");
      const observer = new IntersectionObserver(
        (entry: IntersectionObserverEntry[]) => {
          for (const entries of entry) {
            if (entries.isIntersecting) {
              el.classList.add("show");
              observer.disconnect();
            } else {
              el.classList.add("show");
              observer.disconnect();
            }
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(el);
    }
  });
});


