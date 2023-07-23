<style lang="scss" scoped>
#energy-chart {
  width: 100%;
  height: 100%;
}
.icon2 {
  position: absolute;
  top: 61%;
  left: 87%;
  font-size: 24px;
  color: lightgreen;
}
.standard {
  position: absolute;
  top: 60%;
  left: 91%;
  font-size: 24px;
  color: lightgreen;
}
</style>
<template>
  <div id="energy-chart"></div>
  <div class="icon2">
    <el-icon><Select /></el-icon>
  </div>
  <div class="standard">
    <span> 达标</span>
  </div>
</template>

<script setup>
import { CaretTop } from "@element-plus/icons";
import { ref, reactive, toRefs, onMounted, inject } from "vue";

const global = inject("global");

let initChart = () => {
  let chart = document.getElementById("energy-chart");
  let energyChart = global.echarts.init(chart);

  // 内容区域开始

  var option = {
    // backgroundColor: "#0F224C",
    title: [
      // {
      //   text: "▎综合能耗",
      //   left: "35px",
      //   top: "20px",
      //   textStyle: {
      //     color: "#fff",
      //     fontSize: 20,
      //   },
      // },
      {
        text: "2381965 kgce",
        top: "38%",
        left: "67%",
        textStyle: {
          fontSize: 32,
          fontWeight: "800",
          color: "#fff",
        },
      },
      {
        text: "万支累进",
        x: "14.5%",
        y: "72%",
        textStyle: {
          fontSize: 24,
          lineHeight: 24,
          fontWeight: "100",
          color: "#5dc3ea",
          textAlign: "center",
        },
      },
      {
        text: "万支当月",
        x: "44.5%",
        y: "72%",
        textStyle: {
          fontSize: 24,
          lineHeight: 24,
          fontWeight: "100",
          color: "#5dc3ea",
          textAlign: "center",
        },
      },
    ],
    series: [
      {
        type: "liquidFill",
        radius: "50%",
        center: ["20%", "45%"],
        color: [
          {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#446bf5",
              },
              {
                offset: 1,
                color: "#2ca3e2",
              },
            ],
            globalCoord: false,
          },
        ],
        data: [0.5, 0.45],
        backgroundStyle: {
          borderWidth: 1,
          color: "RGBA(51, 66, 127, 0.7)",
        },
        label: {
          formatter: "2.02\n",
          fontSize: 48,
          color: "#fff",
          fontWeight: "500",
          top: 100,
        },
        outline: {
          // show: false
          borderDistance: 0,
          itemStyle: {
            borderWidth: 5,
            borderColor: "#112165",
          },
        },
      },
      {
        type: "liquidFill",
        radius: "50%",
        center: ["50%", "45%"],
        color: [
          {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#446bf5",
              },
              {
                offset: 1,
                color: "#2ca3e2",
              },
            ],
            globalCoord: false,
          },
        ],
        data: [0.5, 0.5],
        backgroundStyle: {
          borderWidth: 1,
          color: "RGBA(51, 66, 127, 0.7)",
        },
        label: {
          formatter: "2.12\n",
          fontSize: 48,
          color: "#fff",
          fontWeight: "500",
          top: 100,
        },
        outline: {
          // show: false
          borderDistance: 0,
          itemStyle: {
            borderWidth: 5,
            borderColor: "#112165",
          },
        },
      },
    ],
  };

  // 内容区域结束

  energyChart.setOption(option);
  //自适应
  window.onresize = function () {
    //自适应大小
    energyChart.resize();
  };
};
onMounted(() => {
  initChart();
});
</script>
