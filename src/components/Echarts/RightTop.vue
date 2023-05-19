<style lang="scss" scoped>
#water-chart {
  width: 100%;
  height: 100%;
}
</style>
<template>
  <dv-border-box12 class="com-container">
    <div id="water-chart"></div>
  </dv-border-box12>
</template>

<script setup>
import { ref, reactive, toRefs, onMounted, inject } from "vue";

const global = inject("global");

let initChart = () => {
  let chart = document.getElementById("water-chart");
  let waterChart = global.echarts.init(chart);

  // 内容区域开始
  var getmydmc = ["日累计", "月累计", "年累计"]; //名称
  var getmyNum = [502, 12210, 19325]; // 数量
  var getmyd = ["15.70", "13.35", "10.86"]; //比例

  var option = {
    title: {
      text: "▎自来水能耗",
      left: "35px",
      top: "20px",
      textStyle: {
        color: "#fff",
        fontSize: 20,
      },
    },
    grid: {
      left: "15%",
      right: "5%",
      bottom: "5%",
      top: "30%",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "none",
      },
      formatter: function (params) {
        return params[0].name + ": " + params[0].value + "%";
      },
    },
    xAxis: {
      show: false,
      type: "value",
      max: 100,
    },
    yAxis: [
      {
        splitLine: {
          show: false,
        },
        axisLine: {
          //y轴
          show: false,
        },
        type: "category",
        axisTick: {
          show: false,
        },
        inverse: true, // 倒序
        //boundaryGap: false, // 留白政策
        data: getmydmc,
        axisLabel: {
          // color: "rgba(0, 0, 0, 0.65)",
          color: "#fff",
          align: "right",
          verticalAlign: "bottom",
          padding: [0, 0, 10, 0],
          formatter: (value, index) => {
            let i = getmydmc.indexOf(value);
            if (i === 0) {
              return `{lg1|${i + 1}}`;
            } else if (i === 1) {
              return `{lg2|${i + 1}}`;
            } else if (i === 2) {
              return `{lg3|${i + 1}}`;
            } else {
              return `{lg|${i + 1}}`;
            }
          },
          rich: {
            lg1: {
              backgroundColor: "#FF4D4F",
              color: "#FFFFFF",
              borderRadius: [16, 0, 16, 0],
              align: "center",
              padding: [5, 0, 0, 0],
              width: 46,
              fontSize: 26,
              fontFamily: "Source Han Sans CN-Regular",
            },
            lg2: {
              backgroundColor: "#FF7A45",
              color: "#FFFFFF",
              borderRadius: [16, 0, 16, 0],
              align: "center",
              padding: [5, 0, 0, 0],
              width: 46,
              fontSize: 26,
              fontFamily: "Source Han Sans CN-Regular",
            },
            lg3: {
              backgroundColor: "#FAAD14",
              color: "#FFFFFF",
              borderRadius: [16, 0, 16, 0],
              align: "center",
              padding: [5, 0, 0, 0],
              fontSize: 26,
              width: 46,
              fontFamily: "Source Han Sans CN-Regular",
            },
            lg: {
              backgroundColor: "#D5E3EB",
              color: "#FFFFFF",
              borderRadius: [16, 0, 16, 0],
              align: "center",
              padding: [5, 0, 0, 0],
              fontSize: 26,
              width: 46,
              fontFamily: "Source Han Sans CN-Regular",
            },
          },
        },
      },
      {
        type: "category",
        inverse: true,
        position: "left",
        axisLabel: {
          inside: true,
          align: "left",
          verticalAlign: "bottom",
          padding: [0, 0, 13, 0],
          textStyle: {
            // color: "rgba(0, 0, 0, 0.85)",
            color: "#fff",
            fontSize: "26",
            fontFamily: "Source Han Sans CN-Regular",
          },
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        data: getmydmc,
      },
      {
        type: "category",
        inverse: true,
        axisTick: "none",
        axisLine: "none",
        show: true,
        axisLabel: {
          padding: [0, 10, 15, 0],
          verticalAlign: "bottom",
          align: "right",
          textStyle: {
            // color: "rgba(0, 0, 0, 0.85)",
            color: "#fff",
            fontSize: "26",
            fontFamily: "HarmonyOS Sans-Regular",
          },
          formatter: "{value}m³",
        },
        data: getmyNum,
      },
    ],
    series: [
      {
        name: "值",
        type: "bar",
        //zlevel: 1,
        barCategoryGap: "50%", // 柱子距离
        yAxisIndex: 1,
        showBackground: true,
        backgroundStyle: {
          color: "rgba(239, 242, 247, 1)",
          borderRadius: [0, 5, 5, 0],
        },
        itemStyle: {
          color: global.echarts.graphic.LinearGradient(0, 0, 1, 0, [
            {
              offset: 0,
              color: "#4890E5",
            },
            {
              offset: 1,
              color: "#2BB6FA",
            },
          ]),
          barBorderRadius: [5, 5, 5, 5],
        },
        barWidth: 10,
        data: getmyd,
      },
    ],
  };

  // 内容区域结束

  waterChart.setOption(option);
  //自适应
  window.onresize = function () {
    //自适应大小
    waterChart.resize();
  };


};
onMounted(() => {
  initChart();
});
</script>
