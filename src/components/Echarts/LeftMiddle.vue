<style lang="scss" scoped>
#depart-chart {
  width: 100%;
  height: 100%;
}
.depart-decoration {
  // width: 124px;//全屏
  // height: 124px;//全屏
  // top: 140px; //全屏
  // left: 40%;//全屏
  left: 39%;
  width: 140px;
  height: 140px;
  top: 155px;

  position: absolute;
}
</style>
<template>
  <dv-border-box12 class="com-container">
    <div id="depart-chart"></div>
    <dv-decoration-12 class="depart-decoration" />
  </dv-border-box12>
</template>

<script setup>
import { ref, reactive, toRefs, onMounted, inject } from "vue";

const global = inject("global");

let initChart = () => {
  let chart = document.getElementById("depart-chart");
  let departChart = global.echarts.init(chart);

  var color = ["#02CDFF", "#62FBE7", "#7930FF", "#E148EB"];
  var data = [
    {
      value: 281020,
      name: "卷包",
    },
    {
      value: 636880,
      name: "动力",
    },
    {
      value: 294851,
      name: "制丝",
    },
    {
      value: 51170,
      name: "管理",
    },
  ];
  let option = {
    color: color,
    title: {
      text: "▎各部门能耗占比",
      left: "35px",
      top: "20px",
      textStyle: {
        color: "#fff",
        fontSize: 20,
      },
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "horizontal",
      x: "center", //水平位置，【left\center\right\数字】
      y: "90%", //垂直位置，【top\center\bottom\数字】
      textStyle: {
        fontSize: 14,
        color: "#fff",
        fontWeight: "normal",
      },
    },
    series: [
      {
        type: "pie",
        roseType: "radius", //奇形圆
        radius: ["30%", "60%"],
        data: data.map((item, index) => {
          item.label = {
            color: color[index],
            fontSize: 16,
          };
          return item;
        }),
        label: {
          formatter: "{b} : {c} ({d}%)",
          rich: {
            font: {
              fontSize: 20,
              padding: [5, 0],
              color: "#fff",
            },
            hr: {
              height: 0,
              borderWidth: 1,
              width: "100%",
              borderColor: "#ddd",
            },
          },
        },
        labelLine: {
          lineStyle: {
            color: "#ddd",
          },
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0,0,0,0.5)",
          },
        },
      },
    ],
  };

  departChart.setOption(option);
  //自适应
  window.onresize = function () {
    //自适应大小
    departChart.resize();
  };
};
onMounted(() => {
  initChart();
});
</script>
