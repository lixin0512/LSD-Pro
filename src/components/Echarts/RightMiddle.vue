<style lang="scss" scoped>
#electricity-chart {
  width: 100%;
  height: 100%;
}
</style>
<template>
  <dv-border-box12 class="com-container">
    <div id="electricity-chart"></div>
  </dv-border-box12>
</template>

<script setup>
import { ref, reactive, toRefs, onMounted, inject } from "vue";

const global = inject("global");

let initChart = () => {
  let chart = document.getElementById("electricity-chart");
  let electricityChart = global.echarts.init(chart);


  var option = {
    title: {
      text: "▎吨烟综合能耗",
      left: "35px",
      top: "20px",
      textStyle: {
        color: "#fff",
        fontSize: 20,
      },
    },
    series: [
    {
      type: 'gauge',
      center: ["30%", "60%"],
      axisLine: {
        lineStyle: {
          width: 20,
          color: [
            [0.7, '#fd666d'],
            [0.9, '#40c040'],
            [1, '#fd666d']
          ]
        }
      },
      pointer: {
        itemStyle: {
          color: 'auto'
        }
      },
      axisTick: {
        distance: -20,
        length: 8,
        lineStyle: {
          color: '#fff',
          width: 2
        }
      },
      splitLine: {
        distance: -20,
        length: 20,
        lineStyle: {
          color: '#fff',
          width: 4
        }
      },
      axisLabel: {
        color: 'inherit',
        distance: 30,
        fontSize: 12,
        formatter:function(param){
			                if ((param % 10)==0) {
			                    return param
			                }
                    }
      },
      detail: {
        valueAnimation: true,
        formatter: '87.3',
        color: 'inherit'
      },
      data: [
        {
          value: 87.3
        }
      ]
    },
    {
      type: 'gauge',
      center: ["70%", "60%"],
      axisLine: {
        lineStyle: {
          width: 20,
          color: [
            [0.7, '#fd666d'],
            [0.9, '#40c040'],
            [1, '#fd666d']
          ]
        }
      },
      pointer: {
        itemStyle: {
          color: 'auto'
        }
      },
      axisTick: {
        distance: -20,
        length: 8,
        lineStyle: {
          color: '#fff',
          width: 2
        }
      },
      splitLine: {
        distance: -20,
        length: 20,
        lineStyle: {
          color: '#fff',
          width: 4
        }
      },
      axisLabel: {
        color: 'inherit',
        distance: 30,
        fontSize: 12,
        formatter:function(param){
			                if ((param % 10)==0) {
			                    return param
			                }
                    }
      },
      detail: {
        valueAnimation: true,
        formatter: '86.6',
        color: 'inherit'
      },
      data: [
        {
          value: 86.6
        }
      ]
    }    
  ]
};

  electricityChart.setOption(option);
  window.onresize = function () {
    electricityChart.resize();
  };
};
onMounted(() => {
  initChart();
});
</script>
