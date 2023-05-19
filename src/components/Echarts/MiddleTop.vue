<style lang="scss" scoped>
#energy-chart {
  width: 100%;
  height: 100%;
}
.standard{
  position: absolute;
  top: 52%;
  left: 83%;
  color: lightgreen;
}
</style>
<template>
  <dv-border-box12 class="com-container">
    <div id="energy-chart"></div>
    <div class="standard">
      <el-icon><CaretTop />达标</el-icon>
    </div>
  </dv-border-box12>
</template>

<script setup>
import { CaretTop } from "@element-plus/icons";
import { ref, reactive, toRefs, onMounted, inject } from "vue";

const global = inject("global");

let initChart = () => {
  let chart = document.getElementById("energy-chart");
  let energyChart = global.echarts.init(chart);

  // 内容区域开始

  var value = 0.4;
  var value1 = 0.45;
  var data = [value, value1];
  var option = {
    // backgroundColor: "#0F224C",
    title: [
      {
        text: "▎综合能耗",
        left: "35px",
        top: "20px",
        textStyle: {
          color: "#fff",
          fontSize: 20,
        },
      },
      {
        text: "2 Kgce",
        top: "28%",
        // left: "18%",
        left: "28%",
        textStyle: {
          fontSize: 35,
          fontWeight: "800",
          color: "#fff",
        },
      },
      {
        text: "1281965 kgce",
        top: "38%",
        // top: "28%",
        left: "62%",
        textStyle: {
          fontSize: 35,
          fontWeight: "800",
          color: "#fff",
        },
      },
      {
        text: "万支综合能耗",
        // x: "18%",
        x: "28%",
        y: "72%",
        textStyle: {
          fontSize: 20,
          lineHeight: 20,
          fontWeight: "100",
          color: "#5dc3ea",
          textAlign: "center",
        },
      },
      {
        text: "综合能耗",
        x: "70%",
        y: "50%",
        textStyle: {
          fontSize: 20,
          lineHeight: 20,
          fontWeight: "100",
          color: "#5dc3ea",
          textAlign: "center",
        },
      },
    ],
    series: [
      {
        type: "liquidFill",
        // radius: "47%",
        radius: "50%",
        // center: ["25%", "45%"],
        center: ["35%", "45%"],
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
        data: [value, value], // data个数代表波浪数
        backgroundStyle: {
          borderWidth: 1,
          color: "RGBA(51, 66, 127, 0.7)",
        },
        label: {
          fontSize: 20,
          color: "#fff",
          fontWeight: "500",
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

      // {
      //   //第二个球的填充
      //   type: "liquidFill",
      //   // radius: "47%",
      //   radius: "50%",
      //   center: ["75%", "45%"],
      //   color: [
      //     {
      //       type: "linear",
      //       x: 0,
      //       y: 0,
      //       x2: 0,
      //       y2: 1,
      //       colorStops: [
      //         {
      //           offset: 0,
      //           color: "#2aa1e3",
      //         },
      //         {
      //           offset: 1,
      //           color: "#08bbc9",
      //         },
      //       ],
      //       globalCoord: false,
      //     },
      //   ],
      //   data: [value1, value1], // data个数代表波浪数
      //   backgroundStyle: {
      //     borderWidth: 1,
      //     color: "RGBA(51, 66, 127, 0.7)",
      //   },
      //   label: {
      //     fontSize: 20,
      //     color: "#fff",
      //     fontWeight: "500",
      //   },
      //   outline: {
      //     // show: false
      //     borderDistance: 0,
      //     itemStyle: {
      //       borderWidth: 5,
      //       borderColor: "#112165",
      //     },
      //   },
      // },
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
