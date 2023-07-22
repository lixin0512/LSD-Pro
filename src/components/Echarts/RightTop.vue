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

  var  option = {
  title: {
      text: "▎单箱水耗",
      left: "35px",
      top: "20px",
      textStyle: {
        color: "#fff",
        fontSize: 20,
      },
    },
    yAxis: [{
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show:false
        }
    }, {
        type: 'category',
        data: [''],
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show:false
        }
      }
    ],
    xAxis: {
        type: 'value',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel :{
					fontSize: 14
				}
    },
    tooltip: {
        formatter: '{a}: {c}'
    },
    legend: {
        data: ['差', '良', '优', '实际值', {
            name: '目标值',
            icon: 'path://M0 0M443.733333 0 h145.066667 v1024 H443.733333z'
        }],
        selectedMode: false,
        top:50,
        color:"#c0c0c0",
    },
    grid: {
        containLabel: true,
        width: "90%",
        height: 50,
        left: "5%",
        top: 80
    },
    series: [{
        name: "差",
        data: [0.5],
        type: 'bar',
        yAxisIndex: 0,
        stack: "range",
        silent: true,
        barWidth: 20,
        color: "#F5B4AE",
    }, {
        name: "良",
        data: [0.3],
        type: 'bar',
        yAxisIndex: 0,
        stack: "range",
        silent: true,
        barWidth: 20,
        color: "#BFE9C3"
    }, {
        name: "优",
        data: [0.2],
        type: 'bar',
        yAxisIndex: 0,
        stack: "range",
        silent: true,
        barWidth: 20,
        color: "#F5B4AE"
    }, {
        name: "实际值",
        data: [0.61],
        type: 'bar',
        yAxisIndex: 1,
        barWidth: 10,
        color: "#434778",
        z: 4,

    }, {
        name: "目标值",
        type: "scatter",
        symbol: "rect",
        symbolSize: [4, 30],
        data: [0.7],
        color: "#00c000",
        hoverAnimation:false,
        z: 5
    }]
};

setInterval(function () {
  myChart.setOption({
    series: [
      {
        data: [
          {
            value: +(Math.random() * 100).toFixed(2)
          }
        ]
      }
    ]
  });
}, 2000);

  waterChart.setOption(option);
  window.onresize = function () {
    waterChart.resize();
  };


};
onMounted(() => {
  initChart();
});
</script>
