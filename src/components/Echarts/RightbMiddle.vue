<style lang="scss" scoped>
#gas-chart {
  width: 100%;
  height: 100%;
}
</style>
<template>
  <dv-border-box12 class="com-container">
    <div id="gas-chart"></div>
  </dv-border-box12>
</template>

<script setup>
import { ref, reactive, toRefs, onMounted, inject } from "vue";

const global = inject("global");

let initChart = () => {
  let chart = document.getElementById("gas-chart");
  let gasChart = global.echarts.init(chart);

  // 内容区域开始

  var option = {
    title: {
      text: "▎吨烟复烤用水",
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
            [0.2, '#fd666d'],
            [0.4, '#40c040'],
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
			                    return param/10
			                }
                    }
      },
      detail: {
        valueAnimation: true,
        formatter: '3.0',
        color: 'inherit'
      },
      data: [
        {
          value: 30
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
            [0.2, '#fd666d'],
            [0.4, '#40c040'],
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
			                    return param/10
			                }
                    }
      },
      detail: {
        valueAnimation: true,
        formatter: '3.2',
        color: 'inherit'
      },
      data: [
        {
          value: 32
        }
      ]
    }    
  ]
};


  gasChart.setOption(option);
  window.onresize = function () {
    gasChart.resize();
  };


};
onMounted(() => {
  initChart();
});
</script>
