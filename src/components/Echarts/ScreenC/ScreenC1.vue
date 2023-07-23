<style lang="scss" scoped>
#water-chart {
  width: 100%;
  height: 100%;
  color: #fff;
}
</style>
<template>
  <div id="water-chart"></div>
</template>

<script setup>
import { ref, reactive, toRefs, onMounted, inject } from "vue";

const global = inject("global");

let initChart = () => {
  let chart = document.getElementById("water-chart");
  let waterChart = global.echarts.init(chart);

  var option = {
    //可注释这里 暂保留
    title: {
      text: "▎单箱水耗",
      left: "35px",
      top: "20px",
      textStyle: {
        color: "#fff",
        fontSize: 20,
      },
    },
    yAxis: [
      {
        type: "category",
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
      },
      {
        type: "category",
        data: [""],
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
      },
    ],
    xAxis: {
      type: "value",
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        fontSize: 14,
      },
    },
    tooltip: {
      formatter: "{a}: {c}",
    },
    legend: {
      data: [
        "差",
        "良",
        "优",
        "实际值",
        {
          name: "目标值",
          icon: "path://M0 0M443.733333 0 h145.066667 v1024 H443.733333z",
        },
      ],
      selectedMode: false,
      top: 50,
      color: "#c0c0c0",
    },
    grid: {
      containLabel: true,
      width: "90%",
      height: 50,
      left: "5%",
      top: 80,
    },
    series: [
      {
        name: "差",
        data: [0.5],
        type: "bar",
        yAxisIndex: 0,
        stack: "range",
        silent: true,
        barWidth: 20,
        color: "#F5B4AE",
      },
      {
        name: "良",
        data: [0.3],
        type: "bar",
        yAxisIndex: 0,
        stack: "range",
        silent: true,
        barWidth: 20,
        color: "#BFE9C3",
      },
      {
        name: "优",
        data: [0.2],
        type: "bar",
        yAxisIndex: 0,
        stack: "range",
        silent: true,
        barWidth: 20,
        color: "#F5B4AE",
      },
      {
        name: "实际值",
        data: [0.61],
        type: "bar",
        yAxisIndex: 1,
        barWidth: 10,
        color: "#434778",
        z: 4,
      },
      {
        name: "目标值",
        type: "scatter",
        symbol: "rect",
        symbolSize: [4, 30],
        data: [0.7],
        color: "#00c000",
        hoverAnimation: false,
        z: 5,
      },
    ],
  };

  setInterval(function () {
    waterChart.setOption({
      series: [
        {
          data: [
            {
              value: +(Math.random() * 100).toFixed(2),
            },
          ],
        },
      ],
    });
  }, 2000);
   /**  
    * 
 // 子弹多列图
    let option = {
  title: {
    text: "单箱耗水"
  },
  tooltip: {
    show: true,
    trigger: "axis",
    showDelay: 0,
    formatter: "{a0}: {c0}<br />{a1}: {c1}",
    extraCssText: "box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);",
    axisPointer: {
      type: "shadow",
    },
  },
  legend: {
    data: ["实际值", "目标值", "差", "良", '优'],
    icon: "roundRect",
    left: "right",
      textStyle:{
            fontSize: 14,
            color: '#fff'
        },
  },
  yAxis: {
    
    axisLine: {
      show: true,
             onZero: false,
        lineStyle:{
            color: '#00f'
        },
    },
    data: ["单箱耗水1", "单箱耗电1", "单箱耗水2", "单箱耗电2",],
  },
  xAxis: {
    boundaryGap: true,
    type: "value",
    //max: 120,
    splitLine: {
      show: true,   
    },
    axisLine:{
        show: true,
        lineStyle:{
            color: '#00f'
        }
    },
    axisLabel: {
      formatter: "{value} ",
    },
  },
  series: [
    {
      name: "实际值",
      type: "bar",
      barGap: "-300%",
      barWidth: 10,
      z: 10,
      itemStyle: {
        //normal: {
          color: "#434778",
      //  },
      },
      data: [110, 94, 97, 78],
    },
    {
      name: "目标值",
      type: "scatter",
      symbol: "rect",
      silent: true,
      itemStyle: {
      //  normal: {
          color: "#F33535",
       // },
      },
      symbolSize: [5, 70],
      symbolOffset: ["-30%", -10],
      z: 20,
      data: [95, 90, 90, 90],
    },
    {
      name: "差",
      type: "bar",
      barWidth: 50,
      itemStyle: {
     //   normal: {
          color: "#F5B4AE",
       // },
      },
      stack: "total",
      data: [70, 70, 70, 70],
    },
    {
      name: "良",
      type: "bar",
      barWidth: 50,
      itemStyle: {
        //normal: {
          color: "#FADCA9",
      //  },
      },
      stack: "total",
      data: [15, 15, 15, 15],
    },
    {
      name: "优",
      type: "bar",
      barWidth: 100,
      itemStyle: {
       // normal: {
          color: "#BFE9C3",
       // },
      },
      stack: "total",
      data: [15, 15, 15, 15],
    },
  ],
};
setInterval(function () {
  option.series[0].data[0] = Math.round(Math.random() * 100);
  option.series[0].data[1] = Math.round(Math.random() * 100);
  option.series[0].data[2] = Math.round(Math.random() * 100);
  option.series[0].data[3] = Math.round(Math.random() * 100);
  myChart.setOption(option, true);
}, 2000);
*/

  waterChart.setOption(option);
  window.onresize = function () {
    waterChart.resize();
  };
};
onMounted(() => {
  initChart();
});
</script>
