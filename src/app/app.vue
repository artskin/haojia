<template>
  <div>
    <UApp>
      <NuxtLayout>
        <RedPack>
          <NuxtPage />
        </RedPack>
      </NuxtLayout>
    </UApp>
  </div>
</template>
<script>
import "html5-native-ui"

</script>
<style lang="scss">
@use "@/assets/style/index.scss";
@media screen and (max-width: 1380px) {
    html {
        font-size: 16px;
        --size: 16px;
        --size-small: 12px;
        --button-height: 2.3334em;
    }
}
</style>