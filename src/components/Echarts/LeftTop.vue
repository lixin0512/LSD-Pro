<style lang="scss" scoped>
#yield-chart {
  width: 100%;
  height: 100%;
}
// 数字显示框
.yield-wrap {
  width: 100%;
  height: 100px;
  position: absolute;
  top: 32%;
  left: 12%;
}
.yield-wrap > div {
  float: left;
  width: 80px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  font-size: 48px;
  background-color: #001c29;
  opacity: 0.8;
  border: 1px solid #999;
  border-radius: 3px;
}
.yield-wrap > div:not(:last-child) {
  margin-right: 8px;
}
</style>
<template>
  <dv-border-box12 class="com-container">
    <div id="yield-chart" ref="yieldChart"></div>
    <div class="yield-wrap">
      <div v-for="item in yieldArr">
        {{ item }}
      </div>
    </div>
  </dv-border-box12>
</template>

<script setup>
import { ref, reactive, toRefs, onMounted, inject } from "vue";

const global = inject("global");

let yieldnum = ref(47365);
let yieldArr = yieldnum.value.toString().split("");

let initChart = () => {
  let chart = document.getElementById("yield-chart");
  let yieldChart = global.echarts.init(chart);
  let option = {
    title: {
      text: "▎本年度产量（万箱）",
      left: "35px",
      top: "20px",
      textStyle: {
        color: "#fff",
        fontSize: 20,
      },
    },
  };

  yieldChart.setOption(option);
  //自适应
  window.onresize = function () {
    //自适应大小
    chart.resize();
  };
};
onMounted(() => {
  initChart();
});
</script>
