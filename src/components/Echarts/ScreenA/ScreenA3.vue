<style lang="scss" scoped>
#medium-chart {
  width: 100%;
  height: 100%;
}
</style>
<template>
  <div id="medium-chart"></div>
</template>

<script setup>
import { ref, reactive, toRefs, onMounted, inject } from "vue";

const global = inject("global");

let initChart = () => {
  let chart = document.getElementById("medium-chart");
  let mediumChart = global.echarts.init(chart);

  let colors = ["rgba(11, 255, 177, 1)", "rgba(45, 173, 255, 1)"];
  let option = {
    //   title: {
    //    text: "▎各介质月统计",
    //    left: "35px",
    //    top: "20px",
    //    textStyle: {
    //      color: "#fff",
    //      fontSize: 20,
    //    },
    //  },
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
      top: "6",
      textStyle: {
        color: "rgba(212, 232, 254, 1)",
        fontSize: 12,
      },
      itemWidth: 10,
      itemHeight: 10,
      data: ["自来水", "压缩空气", "蒸汽", "电", "软水"],
    },
    grid: {
      top: "15%",
      left: "10%",
      right: "6%",
      bottom: "20%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        axisLine: {
          show: true,
          lineStyle: {
            color: "rgba(108, 166, 219, 1)",
          },
        },
        axisLabel: {
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
        data: [1, 2, 3, 4, 5, 6],
      },
    ],
    yAxis: [
      {
        name: "",
        nameTextStyle: {
          color: "rgba(212, 232, 254, 1)",
          fontSize: 12,
        },
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
        symbol: "circle",
        showAllSymbol: true,
        symbolSize: 0,
        smooth: true,
        lineStyle: {
          width: 2,
          color: colors[0],
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
        symbol: "circle",
        showAllSymbol: true,
        symbolSize: 0,
        smooth: true,
        lineStyle: {
          width: 2,
          color: colors[1],
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
        data: [30, 28, 26, 25, 28, 31, 35, 38, 40, 45, 56, 50],
      },
      {
        name: "蒸汽",
        type: "line",
        symbol: "circle",
        showAllSymbol: true,
        symbolSize: 0,
        smooth: true,
        lineStyle: {
          width: 2,
          color: "#FF6262", // 线条颜色
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
        data: [32, 30, 24, 23, 28, 33, 35, 32, 45, 42, 38, 42],
      },
      {
        name: "电",
        type: "line",
        symbol: "circle",
        showAllSymbol: true,
        symbolSize: 0,
        smooth: true,
        lineStyle: {
          width: 2,
          color: "#FFA200",
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
        data: [40, 30, 46, 55, 52, 47, 45, 58, 41, 42, 36, 33],
      },
      {
        name: "软水",
        type: "line",
        symbol: "circle",
        showAllSymbol: true,
        symbolSize: 0,
        smooth: true,
        lineStyle: {
          width: 2,
          color: "#ddd",
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
        data: [30, 20, 30, 35, 30, 32, 30, 40, 41, 39, 30, 30],
      },
    ],
  };

  mediumChart.setOption(option);
  window.onresize = function () {
    mediumChart.resize();
  };
};
onMounted(() => {
  initChart();
});
</script>
