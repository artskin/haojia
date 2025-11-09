<template>
  <footer class="footer">
    <slot />
    <hr />
    <p class="color-old-neutral-300 text-sm">
      联系我:下边是我的联系方式，欢迎加我入群，双11期间群里经常分享家电方面好价作业！
    </p>
    <p class="flex items-center justify-center">
      <!-- 微信：plus2688 -->
      <img src="/imgs/vchat.png" width="150" alt="vchat" />
    </p>
    <nav>
      <ul>
        <li><NuxtLink to="/about">关于</NuxtLink></li>
      </ul>
    </nav>
  </footer>
</template>

<style lang="scss">
.text-center{
  text-align: center;
}
hr {
  color: #ccc;
  opacity: 0.5;
}
.flex {
  display: flex;
}
.items-center {
  align-items: center;
}
.footer {
  padding: 2rem 0;
  text-align: center;
  color: #999;
  font-size: 12px;
  p{
    padding: 1rem 0;
  }
}
</style>
