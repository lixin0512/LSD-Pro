
<style lang="scss">
.screen-container {
  width: 100%;
  padding: 0 20px;
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

.screen-header {
  width: 100%;
  height: 64px;
  font-size: 20px;
  position: relative;
  // 后面加的下边距
  margin-bottom: 10px;
  background-color: #161522;

  > div {
    img {
      width: 100%;
    }
  }

  .title {
    position: absolute;
    left: 50%;
    top: 50%;
    font-size: 30px;
    letter-spacing: 1.5px;
    transform: translate(-50%, -50%);
  }

  .title-right {
    text-align: center;
    position: absolute;
    right: 0px;
    top: 5%;
  }

  .qiehuan {
    width: 28px;
    height: 21px;
    cursor: pointer;
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

.resize {
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
}
</style>

<template>
  <div class="screen-container">
    <header class="screen-header">
      <div>
        <img src="@/assets/images/header_border_dark.png" alt="" />
      </div>
      <span class="logo"> 采集时间: {{ datetime.collectTime }} </span>
      <span class="title">漯河卷烟厂实时监控系统</span>
      <div class="title-right">
        <TimeModal :datetime="datetime"></TimeModal>
      </div>
    </header>
    <Echarts></Echarts>
  </div>
</template>

<script setup>
import { ref, reactive, toRefs, onMounted, computed, inject } from "vue";
import TimeModal from "comps/timeModal.vue";
import Echarts from "comps/Echarts/index.vue";
import { getTimeData } from "@/utils";
// 注入全局变量
const global = inject("global");
let datetime = reactive({
  date: "",
  time: "",
  week: "",
  collectTime: "",
});

const getCollectTime = () => {
  setInterval(() => {
    const { DD, MM, yyyy, hh, mm, ss, week } = getTimeData();
    datetime.date = `${yyyy}-${MM}-${DD}`;
    datetime.time = `${hh}:${mm}:${ss}`;
    datetime.week = `${week}`;
    let times = Date.now() - 24 * 60 * 60 * 1000; // ms
    let dateString = new Date(times).toLocaleString().split(",")[0];
    datetime.collectTime =
      dateString.split("/")[2] +
      "年" +
      dateString.split("/")[0] +
      "月" +
      dateString.split("/")[1] + "日";
  }, 1000);
};

onMounted(() => {
  getCollectTime();
});
</script>
