<template>
  <header>
    <div class="container">
      <NuxtLink to="/" class="logo">今日好价</NuxtLink>
      <nav>
        <NuxtLink to="/haojia">优惠</NuxtLink>
        <NuxtLink to="/about">关于</NuxtLink>
      </nav>
    </div>
  </header>
  <main>
    <h1>今日好价</h1>
    <p>双十一优惠信息</p>
  </main>
</template>

<script setup lang="ts">
useSeoMeta({
  title: '今日好价',
  description: '双十一优惠信息'
})
</script>

