<script lang="ts" setup>
const title = ref("Work | Duc Anh ");
useSeoMeta({
  title,
  description: () => `description: ${title.value}`
});
</script>
<template>
  <div v-motion-slide-visible-right>
    <WorkDetail
      v-if="$route.path === '/work/registration-service'"
      name="Retake Registration"
      timeline="3/2024 - Present"
      img="/bk.png"
      role="Developer"
    >
      <div class="mb-8 indent-6 leading-2">
        <span class="font-semibold text-primary text-[1.1rem]"
          >Retake Registration</span
        >
        is an in-house and client website that facilitates online exam (course)
        selection, registration and payment for students. On the CMS side,
        managing related information, such as terms, exams, decision fees, etc.
        Help assign teachers and students in class as well as email the score
        board and payment fees.
      </div>

      <div class="font-semibold text-primary text-xl mb-4">
        My Contributors :
      </div>
      <ul class="list-disc leading-relaxed mx-4 marker:text-gray-600 text-base">
        <li>
          Noticeable mail verification, fee enrollment and calendar schedule
          feature, responsible for major CMS feature implementation,
          successfully deployed to production within
          <span class="ct-highlight">2</span>
          months from inception.
        </li>
        <li>
          Contributing to over
          <span class="ct-highlight">20</span>
          reusable components, refractoring focuses on various types of input,
          file imports, data tables and dialogs built with Vuetify, maintaining
          a semantic, modular, and
          <span class="ct-highlight">DRY</span>
          code base. 
        </li>
      </ul>
    </WorkDetail>
    <WorkDetail
      v-if="$route.path === '/work/1102-game'"
      name="1102 Gaming Hub"
      timeline="6/2024"
      img="/1102detail.png"
      role="Developer"
    >
      <div class="mb-8 indent-6 leading-2">
        <a href="https://1102game.com/">
          <span
            class="font-semibold text-bold text-[1.1rem] transition-all hover:text-blue-500"
            >1102 Game</span
          >
        </a>
        is a versatile online gaming hub that offers a diverse selection of free
        browser games, including action, adventure, puzzle, and multiplayer .
        Beyond its game library, 1102 Game serves as a comprehensive resource
        for the gaming community, providing valuable content such as expert
        tips, detailed guides, and up-to-date gaming news.
      </div>

      <div class="font-semibold text-primary text-xl mb-4">
        My Contributors :
      </div>
      <ul
        class="list-disc text-wrap leading-relaxed mx-4 marker:text-gray-600 text-base"
      >
        <li class=" ">
          Implemented both front-end views and CMS functionality for news
          sections and game features, ensuring seamless content management and
          user-friendly interfaces.
        </li>
        <li>
          Applied pre-rendering techniques for static content to improve page
          load times.
        </li>
        <li>
          Worked on SEO improvements by adding custom slugs and Open Graph
          metadata to game pages, contributing to the site's overall SEO
          optimization efforts and achieving a
          <span class="ct-highlight"> 86-point </span>SEO score.
        </li>
      </ul>
    </WorkDetail>
    <WorkDetail
      v-if="$route.path === '/work/keno-cms'"
      name="CMS Keno"
      timeline="1/2024 - 2/2024"
      img="/keno-cms.png"
      role="Developer"
    >
      <div class="mb-8 indent-6 leading-2">
        <!-- <a href="https://1102game.com/">
          <span
            class="font-semibold text-bold text-[1.1rem] transition-all hover:text-blue-500"
            >1102 Game</span
          >
        </a> -->
        This project involved a computerized platform for managing lottery
        operations. The system handles tasks like managing,statisicing lottery
        revenue, updating results in real-time, and sending notifications to
        lottery agents about winning prizes.
      </div>

      <div class="font-semibold text-primary text-xl mb-4">
        My Contributors :
      </div>

      <ul
        class="list-disc text-wrap leading-relaxed mx-4 marker:text-gray-600 text-base"
      >
        <li class=" ">
          Helped maintain the existing system and worked on adding new
          transaction history features
        </li>
        <li>
          Enhanced real-time performance by replacing old interval-based
          fetching with webSocket for result updates
        </li>
        <li>
          Contributed to the code migration from React Class to a new
          maintainable codebase built with Vuetify and Nuxt.js within a month
          and a half.
        </li>
      </ul>
    </WorkDetail>
    <WorkDetail
      v-if="$route.path === '/work/saymee-cms'"
      name="Saymee CMS"
      timeline="2-3/2024"
      img="/saymee.jpg"
      role="Developer"
    >
      <div class="mb-6 indent-6 leading-2">
        <!-- <a href="https://1102game.com/">
          <span
            class="font-semibold text-bold text-[1.1rem] transition-all hover:text-blue-500"
            >1102 Game</span
          >
        </a> -->
        This project is a gamification platform where administrators can manage
        user profiles, create and customize gamified content like quests and
        rewards, analyze user engagement through detailed leaderboards and
        ranking systems.
      </div>

      <div class="font-semibold text-primary text-xl mb-4">
        My Contributors :
      </div>

      <ul
        class="list-disc text-wrap leading-relaxed mx-4 marker:text-gray-600 text-base"
      >
        <li class=" ">
          Implementing leaderboard and chart features, help counts user scores
          and plays by area, ranking users based on perfomance,also display
          daily and weekly statistics, providing visual insights into user
          activity trends.
        </li>
      </ul>
    </WorkDetail>
  </div>
</template>
