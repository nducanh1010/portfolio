<script setup>
import { ref } from "vue";
const date = ref(new Date());
const openCalendar = ref(false);
const attrs = ref([
  {
    key: "today",
    highlight: true,
    dates: date.value
  }
]);
const title = ref("Contact | Duc Anh ");
useSeoMeta({
  title,
  description: () => `description: ${title.value}`
});
</script>
<template>
  <div v-motion-slide-visible-right>
    <h1 class="text-semibold text-3xl font-semibold mb-2">Contact</h1>
    <div class="mb-8">
      <p>
        Whether you have an idea for a project or just want to chat, feel free to shoot me an email!
      </p>
      <div class=" flex flex-col gap-4 items-center md:items-start md:flex-row mt-4 ">
        <button
          @click="openCalendar = !openCalendar"
          v-motion
          :initial="{
            scale: 1,
            boxShadow: '0 0 #0000'
          }"
          :hovered="{
            boxShadow:
              '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            scale: 1,
            transition: {
              duration: 400,
              type: 'spring',
              stiffness: 80
            }
          }"
          class="ct-button bg-white border rounded shadow h-fit w-fit text-nowrap"
        >
          Schedule a meeting
        </button>
        <div
          v-if="openCalendar"
 
          v-motion-slide-visible-right
          :transition="{
            ease: 'ease-out',
            duration: 400,
            type: 'spring',
            stiffness: 80
          }"
          :leave="{
            y: -100,
            opacity: 0
          }"
          class="md:ml-12"
        >
          <VDatePicker
            v-model="date"
            borderless
            transparent
            mode="dateTime"
            is24hr
            locale="vi"
          />
        </div>
      </div>
    </div>
    <div action="#" class="space-y-4">
      <div>
        <input
          class="w-full rounded-lg bg-[#f2f2f2] focus:outline-none border-gray-200 p-3 text-sm"
          placeholder="Name"
          type="text"
          id="name"
        />
      </div>

      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <input
            class="w-full rounded-lg bg-[#f2f2f2] focus:outline-none border-gray-200 p-3 text-sm"
            placeholder="Email address"
            type="email"
            id="email"
          />
        </div>

        <div>
          <input
            class="w-full rounded-lg bg-[#f2f2f2] focus:outline-none border-gray-200 p-3 text-sm"
            placeholder="Phone Number"
            type="tel"
            id="phone"
          />
        </div>
      </div>

      <div>
        <textarea
          class="w-full rounded-lg bg-[#f2f2f2] focus:ring-0 focus:outline-none border-gray-200 p-3 text-sm"
          placeholder="Message"
          rows="8"
          id="message"
        ></textarea>
      </div>

      <div class="mt-4">
        <button
          class="w-full rounded-lg bg-black px-5 py-3 font-medium text-white"
        >
          Send
        </button>
      </div>
    </div>
  </div>
</template>
