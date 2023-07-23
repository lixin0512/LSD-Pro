<template>
  <div class="screen-body">
    <section class="screen-left">
      <dv-border-box13 class="screen-a1">
        <Title/>
        <Screen-a1></Screen-a1>
      </dv-border-box13>
      <dv-border-box12 class="screen-a2">
        <Title :titlename="a2name"/>
        <Screen-a2></Screen-a2>
      </dv-border-box12>
      <dv-border-box12 class="screen-a3">
        <Title :titlename="a3name"/>
        <Screen-a3></Screen-a3>
      </dv-border-box12>
    </section>
    <section class="screen-middle">
      <dv-border-box12 class="screen-b1">
        <Title :titlename="b1name"/>
        <Screen-b1></Screen-b1>
      </dv-border-box12>
      <dv-border-box12 class="screen-b2">
        <Title :titlename="b2name"/>
        <Screen-b2></Screen-b2>
      </dv-border-box12>
    </section>
    <section class="screen-right">
      <dv-border-box12 class="screen-c1">
        <Title :titlename="c1name"/>
        <Screen-c1></Screen-c1>
      </dv-border-box12>
      <dv-border-box12 class="screen-c2">
        <Title  :titlename="c2name"/>
        <Screen-c2></Screen-c2>
      </dv-border-box12>
      <dv-border-box12 class="screen-c3">
        <Title  :titlename="c3name"/>
        <Screen-c3></Screen-c3>
      </dv-border-box12>
      <dv-border-box12 class="screen-c4">
        <Title :titlename="c4name"/>
        <Screen-c4></Screen-c4>
      </dv-border-box12>
    </section>
  </div>
</template>

<script setup>
import ScreenA1 from "./ScreenA/screenA1.vue";
import ScreenA2 from "./ScreenA/screenA2.vue";
import ScreenA3 from "./ScreenA/screenA3.vue";
import ScreenB1 from "./ScreenB/screenB1.vue";
import ScreenB2 from "./ScreenB/screenB2.vue";
import ScreenC1 from "./ScreenC/screenC1.vue";
import ScreenC2 from "./ScreenC/screenC2.vue";
import ScreenC3 from "./ScreenC/screenC3.vue";
import ScreenC4 from "./ScreenC/screenC4.vue";
import Title from "../Title/index.vue";

let a2name = "各部门能耗占比";
let a3name = "各介质月统计";
let b1name = "综合能耗";
let b2name = "系统能效";
let c1name = "单箱水耗";
let c2name = "吨烟综合能耗";
let c3name = "吨烟综合能耗";
let c4name = "重复用水率";
</script>

<style lang="scss" scoped>
dv-border-box12,dv-border-box13{
  position: relative;
}
.screen-body {
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  margin-top: 5px;
  box-sizing: border-box;
  overflow: hidden;
  .screen-left {
    height: 100%;
    flex: 33%;

    .screen-a1 {
      height: 18vh;
      position: relative;
    }

    .screen-a2 {
      height: 37.5vh;
      position: relative;
    }

    .screen-a3 {
      height: 37.5vh;
      position: relative;
    }
  }

  .screen-middle {
    height: 100%;
    flex: 43%;
    margin-left: 0.5%;
    margin-right: 0.5%;

    .screen-b1 {
      width: 100%;
      height: 40vh;
      position: relative;
    }

    .screen-b2 {
      width: 100%;
      height: 53vh;
      position: relative;
    }
  }

  .screen-right {
    height: 100%;
    flex: 33%;

    .screen-c1 {
      height: 22.7vh;
      position: relative;
    }

    .screen-c2 {
      height: 22.7vh;
      margin: 8px 0;
      position: relative;
    }

    .screen-c3 {
      height: 22.7vh;
      margin: 8px 0;
      position: relative;
    }

    .screen-c4 {
      height: 22.7vh;
      position: relative;
    }
  }
}
</style>
