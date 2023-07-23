<style lang="scss">
.screen-container {
  width: 100%;
  background-color: #161522;
  color: #fff;
  box-sizing: border-box;
}

.fullscreen {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  width: 100vw !important;
  height: 100vh !important;
  background-color: #161522;
  color: #fff;
  margin: 0 !important;
  z-index: 9999;
}
.screen-container:hover {
  cursor: url("@/assets/images/WechatIMG88.gif"), auto;
}
</style>

<template>
  <div class="screen-container">
    <Logo :name="name"></Logo>
    <Echarts></Echarts>
  </div>
</template>

<script setup>
import Logo from "@/components/Logo/index.vue";
import Echarts from "@/components/Echarts/index.vue";
import { ref } from "vue";

let name = ref("楚雄卷烟厂动力车间实时监控平台");
</script>
