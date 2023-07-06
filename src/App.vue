<template>
  <router-view v-slot="{ Component }">
    <Transition mode="out-in" enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut"
      :duration="{ enter: 300, leave: 300  }" :css="false">
      <component :is="Component" />
    </Transition>
  </router-view>
</template>

<style scoped>
body {
  max-width: 1920px;
  min-width: 768px;
  max-height: 1080px;
}

</style>
