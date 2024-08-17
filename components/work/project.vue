<script setup lang="ts">
const props = defineProps<{
  name: string;
  linkDeploy?: string;
  link: string;
  description: string;
  stack?: string[];
}>();
</script>
<template>
  <div
    class="group rounded w-full transition duration-300 ease-in-out hover:-translate-y-1 hover:outline-slate-700 outline outline-1 outline-slate-500 flex flex-col p-6"
  >
    <div class="flex justify-between mb-6">
      <UiFolderSvg
        class="w-[40px] ct-link text-slate-400 group-hover:text-blue-500 stroke-1 aspect-square"
      />
      <div class="flex gap-2">
        <a :href="link" target="_blank">
          <UiGithubSvg
            class="w-5 stroke-1 hover:stroke-2 ct-link text-slate-700 aspect-square"
          />
        </a>
        <a v-if="linkDeploy" :href="linkDeploy" target="_blank">
          <UiShareSvg
            class="w-5 stroke-1 hover:stroke-2 ct-link text-slate-700 aspect-square"
          />
        </a>
      </div>
    </div>
    <a
      :href="linkDeploy ? linkDeploy : link"
      target="_blank"
      class="text-xl font-medium group-hover:text-blue-500 text-slate-600 ct-link leading-4"
    >
      {{ name }}
    </a>
    <div class="text-sm tracking-normal mt-4 mb-6 text-slate-500">
      <slot> {{ description }}</slot>
    </div>
    <slot name="stack"></slot>
    <ul class="mt-auto justify-start  text-slate-950 text-sm font-mono flex gap-2 ">
      <li v-for="(item, index) in stack" :key="index" class="ct-stack">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
