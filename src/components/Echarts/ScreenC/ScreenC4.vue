<style lang="scss" scoped>
#steam-chart {
  width: 100%;
  height: 100%;
}
</style>
<template>
  <div id="steam-chart"></div>
</template>

<script setup>
import { ref, reactive, toRefs, onMounted, inject } from "vue";

const global = inject("global");

let initChart = () => {
  let chart = document.getElementById("steam-chart");
  let steamChart = global.echarts.init(chart);

  var option = {
    // title: {
    //   text: "▎重复用水率",
    //   left: "35px",
    //   top: "20px",
    //   textStyle: {
    //     color: "#fff",
    //     fontSize: 20,
    //   },
    // },
    series: [
      {
        type: "gauge",
        center: ["30%", "45%"],
        axisLine: {
          lineStyle: {
            width: 20,
            color: [
              [0.6, "#fd666d"],
              [0.9, "#40c040"],
              [1, "#fd666d"],
            ],
          },
        },
        pointer: {
          itemStyle: {
            color: "auto",
          },
        },
        axisTick: {
          distance: -20,
          length: 8,
          lineStyle: {
            color: "#fff",
            width: 2,
          },
        },
        splitLine: {
          distance: -20,
          length: 20,
          lineStyle: {
            color: "#fff",
            width: 4,
          },
        },
        axisLabel: {
          color: "inherit",
          distance: 30,
          fontSize: 12,
          formatter: function (param) {
            if (param % 10 == 0) {
              return param;
            }
          },
        },
        detail: {
          valueAnimation: true,
          formatter: "76",
          color: "inherit",
        },
        data: [
          {
            value: 76,
          },
        ],
      },
      {
        type: "gauge",
        center: ["70%", "45%"],
        axisLine: {
          lineStyle: {
            width: 20,
            color: [
              [0.6, "#fd666d"],
              [0.9, "#40c040"],
              [1, "#fd666d"],
            ],
          },
        },
        pointer: {
          itemStyle: {
            color: "auto",
          },
        },
        axisTick: {
          distance: -20,
          length: 8,
          lineStyle: {
            color: "#fff",
            width: 2,
          },
        },
        splitLine: {
          distance: -20,
          length: 20,
          lineStyle: {
            color: "#fff",
            width: 4,
          },
        },
        axisLabel: {
          color: "inherit",
          distance: 30,
          fontSize: 12,
          formatter: function (param) {
            if (param % 10 == 0) {
              return param;
            }
          },
        },
        detail: {
          valueAnimation: true,
          formatter: "78",
          color: "inherit",
        },
        data: [
          {
            value: 78,
          },
        ],
      },
    ],
  };

  steamChart.setOption(option);
  window.onresize = function () {
    steamChart.resize();
  };
};
onMounted(() => {
  initChart();
});
</script>
