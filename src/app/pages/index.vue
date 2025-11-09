<template>
  <header>
    
  </header>
  <ContentRenderer v-if="home" :value="home" />
  <div v-else>首页未找到</div>
</template>

<script setup lang="ts">
const { data: home } = await useAsyncData(() => queryCollection('content').path('/').first())

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description
})
</script>

