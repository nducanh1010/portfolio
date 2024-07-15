<script setup lang="ts">
import { hover } from "~/const/transition";
</script>

<template>
  <div v-motion-slide-visible-right>
    <div class="flex flex-col gap-7 justify-center md:justify-start">
      <img
        src="/avatar.png"
        class="max-w-16 min-w-16 aspect-square object-scale-down"
      />
      <h1 class="text-4xl font-semibold">Hi, I'm Duc Anh</h1>
      <div class="flex flex-col md:flex-row gap-4">
        <div
          class="bg-[#f4f4f5] py-1 px-3 outline-1 rounded text-sm outline outline-gray-300"
        >
          Front-end Developer
        </div>
        <div
          class="outline-1 text-sm bg-[#f4f4f5] outline-gray-300 outline rounded flex gap-2 py-1 px-3 items-center"
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
            class="outline-1 text-sm text-[#1d4ed8] bg-[#f4f4f5] outline-gray-300 outline rounded flex gap-2 py-1 px-3 items-center"
            v-motion
            :initial="{
              scale: 1
            }"
            :hovered="{
              ...hover
            }"
          >
            Available for projects
            <object
              data="/mail.svg"
              type="image/svg+xml"
              style="color: #1d4ed8"
              class="aspect-square w-4"
            ></object>
          </div>
        </NuxtLink>
      </div>
    </div>
    <!-- About me Section -->
    <div class="py-16 text-left">
      <div class="text-primary font-semibold">About me</div>
      <div class="text-xl mt-4 leading-normal">
        <!-- Hello, I'm Patrick Gio - a Senior Product Designer with a passion for
        creating innovative, user-centric designs that solve real-world
        problems. With over a decade of experience in the field and a degree in
        industrial design, I have honed my skills and developed a deep
        understanding of user behavior. -->
        Hey! My name is Duc Anh and I'm a web
        developer with a passion for front end development and design.  I
        aspire toward a career that will allow me to channel my creativity
        through crafting beautiful software and engaging experiences. When I'm
        not on the computer, I enjoy running, workouts, and petting dogs.
      </div>
      <NuxtLink to="/work">
        <div class="text-[#1d4ed8] cursor-pointer flex gap-3 mt-6 text-base">
          Learn More
          <object
            data="/next.svg"
            type="image/svg+xml"
            class="aspect-square w-5"
          ></object>
        </div>
      </NuxtLink>
    </div>
    <!-- My worksection -->
    <div class="py-6">
      <div class="text-primary font-semibold mb-4">Recent work</div>
      <div class="flex flex-col gap-4">
        <LazyWorkCard />
        <LazyWorkCard />
        <LazyWorkCard />
        <LazyWorkCard />
      </div>
      <NuxtLink to="work">
        <button class="ct-button w-full md:w-fit bg-semibold mt-12 text-white">
          See more projects
        </button></NuxtLink
      >
    </div>
  </div>
</template>
