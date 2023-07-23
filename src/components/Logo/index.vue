<style lang="scss" scoped>
.screen-header {
  width: 100%;
  height: 64px;
  font-size: 20px;
  position: relative;
  // 后面加的下边距
  margin-bottom: 0px;
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
    font-size: 40px;
    letter-spacing: 1.5px;
    transform: translate(-50%, -50%);
  }

  .title-right {
    text-align: center;
    position: absolute;
    right: 10px;
    top: 25px;
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
  <header class="screen-header">
    <div>
      <img src="@/assets/images/header_border_dark.png" alt="" />
    </div>
    <span class="title">{{ name }}</span>
    <div class="title-right">
      <TimeModal :datetime="datetime"></TimeModal>
    </div>
  </header>
</template>

<script setup>
import TimeModal from "./TimeModal.vue";
import { reactive, onMounted } from "vue";
import { getTimeData } from "@/utils";
// 注入全局变量
let datetime = reactive({
  date: "",
  time: "",
  week: "",
  collectTime: "",
});

let nameProps = defineProps({
  name: {
    type: String,
    default: "",
  },
});

const getCollectTime = () => {
  setInterval(() => {
    const { DD, MM, yyyy, hh, mm, ss, week } = getTimeData();
    datetime.date = `${yyyy}年${MM}月${DD}日`;
    datetime.time = `${hh}:${mm}:${ss}`;
    datetime.week = `${week}`;
    let times = Date.now() - 24 * 60 * 60 * 1000; // ms
    let dateString = new Date(times).toLocaleString().split(",")[0];
    datetime.collectTime =
      dateString.split("/")[2] +
      "年" +
      dateString.split("/")[0] +
      "月" +
      dateString.split("/")[1] +
      "日";
    datetime.collectTime = dateString;
  }, 1000);
};

onMounted(() => {
  getCollectTime();
});
</script>
