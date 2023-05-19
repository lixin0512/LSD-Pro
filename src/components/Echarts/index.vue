<template>
  <div class="screen-body">
    <section class="screen-left">
      <div class="left-top">
        <Left-top></Left-top>
      </div>
      <div class="left-middle">
        <Left-middle></Left-middle>
      </div>
      <div class="left-bottom">
        <Left-bottom></Left-bottom>
      </div>
    </section>
    <section class="screen-middle">
      <div class="middle-top">
        <Middle-top></Middle-top>
      </div>
      <div class="middle-bottom">
        <Middle-bottom></Middle-bottom>
      </div>
    </section>
    <section class="screen-right">
      <div class="right-top">
        <Right-top></Right-top>
      </div>
      <div class="right-middle">
        <Right-middle></Right-middle>
      </div>
      <div class="right-bmiddle">
        <Rightb-middle></Rightb-middle>
      </div>
      <div class="right-bottom">
        <Right-bottom></Right-bottom>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import LeftTop from './LeftTop.vue'
import LeftMiddle from './LeftMiddle.vue'
import LeftBottom from './LeftBottom.vue'
import MiddleTop from './MiddleTop.vue'
import MiddleBottom from './MiddleBottom.vue'
import RightTop from './RightTop.vue'
import RightMiddle from './RightMiddle.vue'
import RightbMiddle from './RightbMiddle.vue'
import RightBottom from './RightBottom.vue'
import { ref, reactive, toRefs } from "vue";
</script>

<style lang="scss" scoped>
.screen-header {
  width: 100%;
  height: 64px;
  font-size: 20px;
  position: relative;

  >div {
    img {
      width: 100%;
    }
  }

  .title {
    position: absolute;
    color: #fff;  
    left: 50%;
    top: 50%;
    font-size: 30px;
    letter-spacing: 1.5px;
    transform: translate(-50%, -50%);
  }

  .title-right {
    display: flex;
    align-items: center;
    position: absolute;
    right: 0px;
    padding-top: 30px;
    top: 50%;
    transform: translateY(-80%);
  }

  .qiehuan {
    width: 28px;
    height: 21px;
    cursor: pointer;
  }

  .datetime {
    font-size: 15px;
    margin-left: 10px;
  }

  .logo {
    position: absolute;
    left: 0px;
    top: 50%;
    transform: translateY(-80%);

    a {
      text-decoration: none;
    }
  }
}

.screen-body {
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 10px;

  .screen-left {
    height: 100%;
    // width: 27.6%;
    width: 31%;

    .left-top {
      height: 18vh;
      position: relative;
    }

    .left-middle {
      height: 37.5vh;
      // margin:  8px 0;
      position: relative;
    }

    .left-bottom {
      height: 37.5vh;
      position: relative;
    }
  }

  .screen-middle {
    height: 100%;
    // width: 41.5%;
    width: 41%;
    // margin-left: 1.6%;
    margin-left: 0.5%;
    // margin-right: 1.6%;
    margin-right: 0.5%;

    .middle-top {
      width: 100%;
      height: 40vh;
      position: relative;
    }



    .middle-bottom {
      // margin-top: 25px;
      width: 100%;
      height: 53vh;
      position: relative;
    }
  }

  .screen-right {
    height: 100%;
    // width: 27.6%;
    width: 31%;

    .right-top {
      height: 22.7vh;
      position: relative;
    }

    .right-middle {
      height: 22.7vh;
      margin:  8px 0;
      position: relative;
    }

    .right-bmiddle {
      height: 22.7vh;
      margin:  8px 0;
      position: relative;
    }

    .right-bottom {
      height: 22.7vh;
      // margin-top: 25px;
      // margin-top: 8px;
      position: relative;
    }
  }
}


</style>
