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

/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */
</style>
