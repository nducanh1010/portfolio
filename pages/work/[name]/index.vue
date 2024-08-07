<template>
  <div v-motion-slide-visible-right>
    <WorkDetail
      v-if="$route.path === '/work/registration-service'"
      name="Retake Registration"
      timeline="3/2024 - Present"
      img="/portfolio/bk.png"
      role="Developer"
    >
      <div class="mb-8 indent-6 leading-2">
        <span class="font-semibold text-primary text-xl"
          >Retake Registration</span
        >
        is an in-house and client website that facilitates online exam (course)
        selection, registration, and payment for students. On the CMS side,
        managing related information, such as terms, exams, decision fees, etc.
        Help assign teachers and students in class as well as email the score
        board and payment fees.
      </div>

      <div class="font-semibold text-primary text-xl mb-4">
        My Contributors :
      </div>
      <ul class="list-disc leading-relaxed mx-4 marker:text-gray-600 text-base">
        <li>
          Noticeable mail verification, fee enrollment, and calendar schedule
          feature, responsible for major CMS feature implementation,
          successfully deployed to production within
          <span class="ct-highlight">2</span>
          months from inception.
        </li>
        <li>
          Contributing to over
          <span class="ct-highlight">20</span>
          reusable components, refractoring focuses on various types of input,
          file imports, data tables, and dialogs built with Vuetify, maintaining
          a semantic, modular, and
          <span class="ct-highlight">DRY</span>
          code base. 
        </li>
      </ul>
    </WorkDetail>
  </div>
</template>
