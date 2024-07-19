<script setup>
const { locale, setLocale } = useI18n()
</script>

<template>
   <div class="flex flex-col gap-8 w-full container">
  <div>Abstract Galaxy</div>
  <div><hr /></div>
  <div>
    <p>
      <span>Timeline</span>
      <span>2021 - 2022</span>
    </p>
    <p>
      <span>My Role</span>
      <span>Illustrator</span>
    </p>
  </div>
  <img src="/test.png" class="w-5/6 max-w-5/6 object-contain h-16" />
  <div></div>
</div>
  <div>
    <div>
      <button @click="setLocale('en')">en</button>
      <button @click="setLocale('fr')">fr</button>
      <p>{{ $t('welcome') }}</p>
    </div>
  </div>
</template>