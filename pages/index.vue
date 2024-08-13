<script setup lang="ts">
import { hover } from "~/const/transition";
</script>

<template>
  <div v-motion-slide-visible-right>
    <div
      class="flex flex-col break-normal gap-7 justify-center md:justify-start"
    >
      <img
        src="/avatar.png"
        class="max-w-16 min-w-16 aspect-square object-scale-down"
      />
      <div class="text-4xl mt-4 text-center md:text-left leading-normal">
        <div class="flex justify-center md:justify-start gap-2">
          Hello!
          <img
            src="/wave.png"
            class="hover:animate-wave w-8 aspect-square object-contain"
          />
        </div>
        I'm <span class="font-semibold">Duc Anh</span>
      </div>
      <div class="flex flex-col items-center md:flex-row gap-4">
        <div
          class="bg-[#f4f4f5] w-fit py-1 text-nowrap px-3 outline-1 rounded text-sm outline outline-gray-300"
        >
          Front-end Developer
        </div>
        <div
          class="outline-1 text-sm text-nowrap text-center w-fit bg-[#f4f4f5] outline-gray-300 outline rounded flex gap-2 py-1 px-3 items-center"
          v-motion
          :initial="{
            scale: 1
          }"
          :hovered="{
            ...hover
          }"
        >
          <p>
            Currently at
            <a
              target="_blank"
              class="underline-offset-2 underline"
              href="https://xtel.vn/"
              >Xtel.vn</a
            >
          </p>

          <img src="/share.png" class="aspect-square w-4 object-scale-down" />
        </div>
        <NuxtLink href="/contact">
          <div
            class="outline-1 text-sm w-fit text-nowrap text-[#1d4ed8] bg-[#f4f4f5] outline-gray-300 outline rounded flex gap-2 py-1 px-3 items-center"
            v-motion
            :initial="{
              scale: 1
            }"
            :hovered="{
              ...hover
            }"
          >
            Available for projects
            <img
              src="/mailer.svg"
              style="color: #1d4ed8"
              class="aspect-square w-4"
              alt="My Happy SVG"
            />
            <!-- <embed
              src="/mailer.svg"
              type="image/svg+xml"
              style="color: #1d4ed8"
              class="aspect-square w-4"
            /></embed> -->
          </div>
        </NuxtLink>
      </div>
    </div>
    <!-- About me Section -->
    <div class="py-16 text-left">
      <div class="text-primary font-semibold">About me</div>
      <div class="text-2xl mt-4 leading-normal">
        I'm a front-end software engineer with a passion for crafting beautiful
        and intuitive digital experiences. My expertise lies in translating
        design concepts into seamless, responsive interfaces that delight users
        and drive engagement.
      </div>
      <!--       
        My name is Duc Anh and I'm a web developer with a passion for front end
        development and design. I aspire toward a career that will allow me to
        channel my creativity through crafting beautiful software and engaging
        experiences. When I'm not on the computer, I enjoy running, workouts,
        and petting dogs. -->
      <NuxtLink to="/work">
        <div class="text-[#1d4ed8] cursor-pointer flex gap-3 mt-6 text-base">
          Learn More
          <object
            data="/portfolio/next.svg"
            type="image/svg+xml"
            class="aspect-square w-5"
          ></object>
        </div>
      </NuxtLink>
    </div>
    <!-- My worksection -->
    <div class="py-6">
      <div class="text-primary font-semibold mb-4">Recent work</div>
      <div class="flex flex-col gap-10">
        <LazyWorkCard
          name="Retake Registration"
          timeline="2024"
          role="Developer"
          img="/portfolio/bk-view.png"
          link="/work/registration-service"
        >
          <template #stack
            ><ul class="mt-auto text-slate-950 text-sm font-mono flex gap-3">
              <li>Nuxt.js</li>
              <li>Vuetify</li>
            </ul></template
          >
          In Retake Registration, I was responsible for implementing major CMS
          features, including email verification and scheduling, also developing
          boilerplate UI components.
        </LazyWorkCard>
        <LazyWorkCard
          name="1102's Game"
          timeline="2024"
          role="Developer"
          img="/portfolio/1102.png"
          link="/work/1102-game"
        >
          <template #stack
            ><ul class="mt-auto text-slate-950 text-sm font-mono flex gap-3">
              <li>Material UI</li>

              <li>Next.js</li>
            </ul></template
          >
          A dynamic web application that serves free browser-based games and provides
          valuable resources like news, tips, guides, and gameplay footage. Made with Nextjs and Material UI
        </LazyWorkCard>
      </div>
      <NuxtLink to="work">
        <button class="ct-button w-full md:w-fit bg-semibold mt-12 text-white">
          See more projects
        </button></NuxtLink
      >
    </div>
  </div>
</template>
