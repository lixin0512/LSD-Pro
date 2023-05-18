<style lang="scss" scoped>
#medium-chart {
  width: 100%;
  height: 100%;
}
</style>
<template>
  <dv-border-box12 class="com-container">
    <div id="medium-chart"></div>
  </dv-border-box12>
</template>

<script setup>
import { ref, reactive, toRefs, onMounted, inject } from "vue";

const global = inject("global");

let initChart = () => {
  let chart = document.getElementById("medium-chart");
  let mediumChart = global.echarts.init(chart);

  let colors = ["rgba(11, 255, 177, 1)", "rgba(45, 173, 255, 1)"];
  let option = {
     title: {
      text: "▎各介质月统计",
      left: "35px",
      top: "20px",
      textStyle: {
        color: "#fff",
        fontSize: 20,
      },
    },
    //你的代码
//     backgroundColor: "#000",
    tooltip: {
      trigger: "axis",
      backgroundColor: "rgba(1, 13, 19, 0.5)",
      borderWidth: 0,
      axisPointer: {
        lineStyle: {
          color: "rgba(11, 208, 241, 1)",
          type: "slider",
        },
      },
      textStyle: {
        color: "rgba(212, 232, 254, 1)",
        fontSize: 12,
      },
    },
    legend: {
      // align: 'left',
      // right: 'center',
      top: "8%",
      // type: 'plain',
      textStyle: {
        color: "rgba(212, 232, 254, 1)",
        fontSize: 12,
      },
      //icon:'icon',
      // itemGap: 1,
      itemWidth: 10,
      itemHeight: 10,
      // icon: 'roundRect',
      data: ["自来水", "压缩空气", "蒸汽", "电", "软水"],
    },
    grid: {
      top: "25%",
      left: "10%",
      right: "6%",
      bottom: "15%",
      // containLabel: true
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        axisLine: {
          //坐标轴轴线相关设置。数学上的x轴
          show: true,
          lineStyle: {
            color: "rgba(108, 166, 219, 1)",
          },
        },
        axisLabel: {
          //坐标轴刻度标签的相关设置
          textStyle: {
            color: "rgba(212, 232, 254, 1)",
            padding: 5,
            fontSize: 14,
          },
          formatter: function (data) {
            return data;
          },
        },
        splitLine: {
          show: false,
          lineStyle: {
            color: "#192a44",
          },
        },
        axisTick: {
          show: false,
        },
        data: [1, 2, 3, 4, 5],
      },
    ],
    yAxis: [
      {
        name: "",
        nameTextStyle: {
          color: "rgba(212, 232, 254, 1)",
          fontSize: 12,
        },
        // min: 0,
        splitLine: {
          lineStyle: {
            color: "rgba(108, 166, 219, 0.5)",
            type: "dashed",
          },
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: "#233653",
          },
        },
        axisLabel: {
          show: true,
          textStyle: {
            color: "rgba(212, 232, 254, 1)",
            padding: 2,
          },
          formatter: function (value) {
            if (value === 0) {
              return value;
            }
            return value;
          },
        },
        axisTick: {
          show: false,
        },
      },
    ],
    series: [
      {
        name: "自来水",
        type: "line",
        symbol: "circle", // 默认是空心圆（中间是白色的），改成实心圆
        showAllSymbol: true,
        symbolSize: 0,
        smooth: true,
        lineStyle: {
          normal: {
            width: 2,
            color: colors[0], // 线条颜色
          },
          borderColor: "rgba(0,0,0,.4)",
        },
        itemStyle: {
          color: colors[0],
          borderColor: "#646ace",
          borderWidth: 0,
        },
        tooltip: {
          show: true,
        },
        data: [20, 22, 21, 28, 26, 30, 24, 22, 21, 40, 35, 38],
      },
      {
        name: "压缩空气",
        type: "line",
        symbol: "circle", // 默认是空心圆（中间是白色的），改成实心圆
        showAllSymbol: true,
        symbolSize: 0,
        smooth: true,
        lineStyle: {
          normal: {
            width: 2,
            color: colors[1], // 线条颜色
          },
          borderColor: "rgba(0,0,0,.4)",
        },
        itemStyle: {
          color: colors[1],
          borderColor: "#646ace",
          borderWidth: 0,
        },
        tooltip: {
          show: true,
        },
        data: [30, 28, 26, 25, 28, 31, 35, 38, 40, 45, 56, 60],
      },
      {
        name: "蒸汽",
        type: "line",
        symbol: "circle", // 默认是空心圆（中间是白色的），改成实心圆
        showAllSymbol: true,
        symbolSize: 0,
        smooth: true,
        lineStyle: {
          normal: {
            width: 2,
            color: "#FF6262", // 线条颜色
          },
          borderColor: "rgba(0,0,0,.4)",
        },
        itemStyle: {
          color: "#FF6262",
          borderColor: "#646ace",
          borderWidth: 0,
        },
        tooltip: {
          show: true,
        },
        data: [32, 30, 24, 23, 28, 33, 35, 32, 45, 42, 58, 62],
      },
      {
        name: "电",
        type: "line",
        symbol: "circle", // 默认是空心圆（中间是白色的），改成实心圆
        showAllSymbol: true,
        symbolSize: 0,
        smooth: true,
        lineStyle: {
          normal: {
            width: 2,
            color: "#FFA200", // 线条颜色
          },
          borderColor: "rgba(0,0,0,.4)",
        },
        itemStyle: {
          color: "#FFA200",
          borderColor: "#646ace",
          borderWidth: 0,
        },
        tooltip: {
          show: true,
        },
        data: [40, 30, 46, 45, 48, 41, 45, 48, 41, 42, 66, 63],
      },
      {
        name: "软水",
        type: "line",
        symbol: "circle", // 默认是空心圆（中间是白色的），改成实心圆
        showAllSymbol: true,
        symbolSize: 0,
        smooth: true,
        lineStyle: {
          normal: {
            width: 2,
            color: "#ddd", // 线条颜色
          },
          borderColor: "rgba(0,0,0,.4)",
        },
        itemStyle: {
          color: "#ddd",
          borderColor: "#646ace",
          borderWidth: 0,
        },
        tooltip: {
          show: true,
        },
        data: [30, 20, 40, 45, 30, 80, 60, 40, 41, 39, 30, 30],
      },
    ],
  };

  mediumChart.setOption(option);
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
