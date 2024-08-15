<template>
  <div v-motion-slide-visible-right>
    <div class="font-semibold text-3xl mb-4">Work</div>
    <div class="mb-12">Some Things I’ve Built</div>
    <div class="flex flex-col gap-4 md:flex-row flex-wrap">
      <WorkItem
        name="Retake Registration"
        link="/work/registration-service"
        img="/portfolio/bk.png"
        title="In-house school application"
      />
      <WorkItem
        name="1102's Game"
        link="/work/1102-game"
        img="/portfolio/1102detail.png"
        title="Online game browser and news feed"
      />
      <WorkItem
        name="Keno CMS"
        link="/work/keno-cms"
        img="/portfolio/keno-cms.png"
        title="Legacy codebase migration"
      />
      <!-- <WorkItem
        name="Coffee Wind"
        link="/work/coffee-wind"
        img="/portfolio/coffee-wind.png"
        title="Legacy codebase migration"
      /> -->
    </div>
  </div>
</template>
