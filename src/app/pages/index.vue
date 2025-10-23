<template>
  <header>
    <nav>
      <ul>
        <li><NuxtLink to="/haojia">好价商品</NuxtLink></li>
        <li><NuxtLink to="/posts/1">Post 1</NuxtLink></li>
      </ul>
    </nav>
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

