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

  var option = {
    title: {
      text: "▎单箱耗水",
      left: "135px",
      top: "0px",
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
            [0.5, '#fd666d'],
            [0.8, '#40c040'],
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
			                    return param/100
			                }
                    }
      },
      detail: {
        valueAnimation: true,
        formatter: '0.70',
        color: 'inherit'
      },
      data: [
        {
          value: 70
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
            [0.5, '#fd666d'],
            [0.8, '#40c040'],
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
			                    return param/100
			                }
                    }
      },
      detail: {
        valueAnimation: true,
        formatter: '0.68',
        color: 'inherit'
      },
      data: [
        {
          value: 68
        }
      ]
    }    
  ]
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
