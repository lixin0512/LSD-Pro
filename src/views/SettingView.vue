<template>
   <div class="setting animated  animate__bounceInDown">

      <div class="setting-title text-center animate__animated animate__bounce">{{ settingTitle }}</div>

      <div class="setting-charts-1"></div>
      <div class="setting-charts-2"></div>
      <div class="setting-charts-3"></div>
      <el-button @click="change">change</el-button>
      <!-- <el-button @click="add">+</el-button>
      <el-button @click="reduce">-</el-button> -->
      <el-button @click="() => size += 10">+</el-button>
      <el-button @click="() => size -= 10">-</el-button>
   </div>
</template>

<script setup>
import { ref, reactive, toRefs, onMounted, inject } from "vue";
// 注入全局变量
const global = inject("global");
let settingTitle = ref('');
let isShow = ref(true);
let size = ref(30)

let change = () => {
   settingTitle.value = "楚雄卷烟厂大屏展示";
   isShow.value = !isShow.value;
};
let add = () => {
   size.value += 10;
   console.log(size.value)
};
let reduce = () => {
   size.value -= 10;
   console.log(size.value)
};
const color = ref("red");

/**请求数据 
onMounted(async()=>{
   let result = await global.api.getEcharts();
  if(result.success){
    list.value = result.data
  }else{
  throw new Error("请求失败");
}
   let res = result.data;
})
*/

</script>

<style lang="scss" scoped>
@import "styles/setting.scss";

.setting-title {
   color: v-bind(color);
   font-size: calc(v-bind(size) * 1px);
}

// .setting {
//    @include bg(red);
// }

// 定义变量

// .setting{
//    @include background-black;
// }
</style>
      