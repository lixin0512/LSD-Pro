<style lang="scss" scoped>
#cop-chart {
  width: 100%;
  height: 100%;
}
.cop-scroll-board {
  width: 98.6%;
  height: 46vh;
  position: absolute;
  top: 60px;
  left: 6px;
}
</style>
<template>
  <dv-border-box12 class="com-container">
    <div id="cop-chart"></div>
    <dv-scroll-board
      class="cop-scroll-board"
      :config="config"
      style=""
      @mouseover="mouseoverHandler"
      @click="clickHandler"
    />
  </dv-border-box12>
</template>

<script setup>
import { ref, reactive, toRefs, onMounted, inject } from "vue";

const global = inject("global");

//滚屏区域开始
const config = reactive({
  header: ["名称", "稳定性", "月能效/指标", "年能效/指标"],
  data: [
    ["1号空压机", "稳定", "1.13/1.12", "1.13/1.12"],
    ["2号空压机", "稳定", "1.13/1.12", "1.13/1.12"],
    ["3号空压机", "稳定", "1.13/1.12", "1.13/1.12"],
    ["1号制冷机", "轻微波动", "1.13/1.12", "1.13/1.12"],
    ["2号制冷机", "严重波动", "1.13/1.12", "1.13/1.12"],
    ["1号地源热泵", "稳定", "1.13/1.12", "1.13/1.12"],
    ["2号地源热泵", "稳定", "1.13/1.12", "1.13/1.12"],
  ],
  columnWidth: [210, 210, 210, 210],
  align: ["center","center","center","center"],
  index: false,
  waitTime: 4000,
  rowNum: 6,
});

const mouseoverHandler = (e) => {
  console.log(e);
};

const clickHandler = (e) => {
  console.log(e);
};
//滚屏区域结束

let initChart = () => {
  let chart = document.getElementById("cop-chart");
  let copChart = global.echarts.init(chart);

  // 内容区域开始
  let option = {
    title: {
      text: "▎设备智能分析",
      left: "35px",
      top: "20px",
      textStyle: {
        color: "#fff",
        fontSize: 20,
      },
    },
  };

  // 内容区域结束

  copChart.setOption(option);

  //自适应
  // window.onresize = function () {
  //   //自适应大小
  //   chart.resize();
  // };
};
onMounted(() => {
  initChart();
});
</script>
