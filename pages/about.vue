<script lang="ts" setup>
const title = ref("About Me | Duc Anh ");
useSeoMeta({
  title,
  description: () => `description: ${title.value}`
});
</script>
<template>
  <div
    v-motion
    :initial="{
      x: 100,
      opacity: 0
    }"
    :visible="{
      x: 0,
      opacity: 1
    }"
    :enter="{}"
  >
    <div class="font-semibold text-3xl mb-4">Get to know me</div>
    <img
      src="/about.jpg"
      class="rounded-xl w-full aspect-[16/7] object-cover mb-10"
    />
    <div class="w-full text-wrap md:w-[90%]">
      <p>
        I'm passionate about Front-end & Full Stack Development, with a solid
        foundation in JavaScript, Vue/React.js, HTML, and CSS. I'm currently
        expanding my skills in back-end technologies, exploring Express,Nest.js
        . I believe in embracing new challenges and continuously learning. My
        goal is to broaden my expertise across various areas of web development,
        as I find that diverse knowledge helps me approach problems creatively.
        Whether I'm working on a responsive user interface or contributing to a
        full-stack application, I'm always eager to create something that's both
        functional and user-friendly. I enjoy keeping up with the latest web
        technologies and industry best practices. Currently, I'm working on a
        <a
          target="_blank"
          class="text-blue-700 transition duration-700 ease-in-out hover:underline"
          href="https://1102game.com/"
        >
          1102's browser game
        </a>
        using React and an in-house CMS appication with Nuxt.js . These projects
        are helping me apply my skills and learn new concepts along the way. I'm
        a dedicated problem-solver and enthusiastic team player, always ready to
        collaborate and learn from others. While I'm excited about my current
        projects, I'm also open to new opportunities that can challenge me and
        accelerate my growth as a developer. You can check out some of my work
        on my
        <a
          target="_blank"
          class="text-blue-700 transition duration-700 ease-in-out hover:underline"
          href="https://github.com/nducanh1010/"
        >
          GitHub
        </a>
        . I'm always looking to connect with other developers and tech
        enthusiasts, so feel free to reach out!
      </p>

      <div class="font-semibold text-2xl font-serif mb-8 mt-16">
        Programming Languages & Tools:
      </div>
      <p class="text-xl text-primary font-medium font-mono mb-4">
        Most play with:
      </p>
      <div class="flex gap-6 items-center justify-start flex-wrap">
        <i
          class="devicon-vuejs-plain text-5xl colored hover:text-green-500 duration-200"
        ></i>
        <i
          class="devicon-nuxtjs-plain colored text-5xl hover:text-green-500 duration-200"
        ></i>
        <i class="devicon-vuetify-plain text-5xl colored"></i>

        <i class="devicon-react-original text-5xl colored" title="ReactJS"></i>
        <i class="devicon-webstorm-plain colored text-5xl"></i>

        <i class="devicon-figma-plain colored text-5xl"></i>
        <i
          class="devicon-bash-plain text-5xl colored hover:text-slate-500 duration-200"
        ></i>
      </div>
      <p class="text-xl text-primary font-medium font-mono my-4">
        Familiar with these guys:
      </p>

      <div class="flex gap-6 items-center justify-start">
        <i class="devicon-nextjs-plain colored text-5xl"></i>
        <i class="devicon-materialui-plain text-5xl colored"></i>
        <i class="text-5xl colored devicon-nestjs-original"></i>
        <i class="text-5xl colored devicon-docker-plain"></i>

        <i class="text-5xl colored devicon-nginx-original"></i>
      </div>
      <div class="font-semibold text-2xl font-serif mb-6 mt-16">Workflow:</div>
      <ul class="list-none list-inside w-full">
        <li class="font-semibold">
          <i
            class="fa fa-check text-green-600 text-xl font-extrabold mx-3"
            aria-hidden="true"
          ></i>
          Testing & Debugging
        </li>
        <li class="font-semibold">
          <i
            class="fa fa-check text-green-600 text-xl font-extrabold mx-3"
            aria-hidden="true"
          ></i>

          Git, Github for Teamwork
        </li>
        <li class="font-semibold">
          <i
            class="fa fa-check text-green-600 text-xl font-extrabold mx-3"
            aria-hidden="true"
          ></i>
          Responsive Web Design
        </li>
        <li class="font-semibold">
          <i
            class="fa fa-check text-green-600 text-xl font-extrabold mx-3"
            aria-hidden="true"
          ></i>

          English for Work!
          <ul class="list-disc ml-9 list-inside leading-7 pt-1">
            <li class="text-primary font-normal">
              For Reading: I can comfortably read and interpret documentation,
              project specifications, and work totally in English.
            </li>
            <li class="text-primary font-normal">
              For Speaking: I am capable of basic communication and am always
              striving to improve every day. In my free time, I'm usually
              practicing by self-learning through an E -learning platform and
              with a native English teacher.
              <!-- I'm currently practicing communication
              with a native teacher every weekend. -->
            </li>
            <li class="text-primary font-normal">
              I would really like the opportunity to work at your organization,
              where I would be able to practice my ability to speak English.
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
