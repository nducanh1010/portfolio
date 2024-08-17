<template>
  <div v-motion-slide-visible-right>
    <div class="font-semibold text-3xl mb-4">Work</div>
    <div class="mb-12">Some Things I’ve Built</div>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
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
      <WorkItem
        name="Saymee CMS"
        link="/work/saymee-cms"
        img="/portfolio/saymee.jpg"
        title="Game leaderboard management and chart statistics"
      />
      <!-- <WorkItem
        name="Coffee Wind"
        link="/work/coffee-wind"
        img="/portfolio/coffee-wind.png"
        title="Legacy codebase migration"
      /> -->
    </div>
    <div
      class="mt-16 capitalize font-medium text-slate-700 text-xl text-center mb-6"
    >
      Other Noteworthy Projects
    </div>
    <div
      class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2"
    >
      <LazyWorkProject
        name="Coffee Wind."
        link="https://github.com/nducanh1010/coffee-wind"
        link-deploy="https://nducanh1010.github.io/coffee-wind/"
        :stack="['Nuxt.js', 'TailwindCss']"
        description="A responsive single-page
      template for coffee enthusiasts. Built with Vanilla JavaScript and Nuxt.js."
      />
      <LazyWorkProject
        name="Trello Web"
        link="https://github.com/nducanh1010/trello-web"
        link-deploy="https://nducanh1010.github.io/trello-web/"
        :stack="['Express.js', 'Material', 'React', 'DndKit']"
        description="A simple web-based project management tool with drag-and-drop functionality. Features board creation, and real-time updates. Deployed using Node Render"
      />
      <LazyWorkProject
        name="it jobs"
        link="https://github.com/nducanh1010/NestJs_Fundamental"
        :stack="['Nest.js', 'MongoDb', 'React', 'Docker']"
        description="A single page template for Coffee Lover made with Vanilla & Nuxt.js"
      >
        Job search platform clone of Itviec with CV submission and role-based
        access. Deployed using Nginx, Docker, and SSL.
        <a
          class="text-blue-700"
          target="_blank"
          href="https://drive.google.com/file/d/1aNm5C-aKrcIMT-6FavPO3Mj4RIFb24V0/view?usp=sharing"
          >Full zip link</a
        >.
      </LazyWorkProject>
      <!-- <LazyWorkProject />
      <LazyWorkProject /> -->
    </div>
  </div>
</template>
