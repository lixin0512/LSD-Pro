<template>
   <div class="screen-container">
     <!-- <div class="setting-header  animate__animated animate__fadeIn ">
           <span class="setting-title cur-pointer" @click="changeSettingTitle">{{ settingTitle }}</span>
           <TimeModal class="setting-time"></TimeModal>
        </div> -->
     <header class="screen-header">
       <div>
         <img src="@/assets/images/header_border_dark.png" alt="" />
       </div>
       <span class="logo"> 采集时间: {{ datetime.collectTime }} </span>
       <span class="title">漯河卷烟厂实时监控系统</span>
       <div class="title-right">
         <TimeModal :datetime="datetime"></TimeModal>
       </div>
     </header>
     <div class="setting-line-1"></div>
     <div class="setting-line-2"></div>
     <div class="setting-line-3"></div>
   </div>
 </template>
 
 <script setup>
 import { ref, reactive, toRefs, onMounted, computed, inject } from "vue";
 import TimeModal from "comps/timeModal.vue";
 import { getTimeData } from "@/utils";
 // 注入全局变量
 const global = inject("global");
 let settingTitle = ref("漯河卷烟厂实时监控系统");
 let datetime = reactive({
   date: "",
   time: "",
   week: "",
   collectTime: "",
 });
 
 let heightLists = reactive({
   titleH: 6,
   line1H: 25,
   line2H: 38,
   line3H: null,
 });
 computed(() => {
   heightLists.line3H =
     100 - heightLists.titleH - heightLists.line1H - heightLists.line2H;
 });
 let { titleH, line1H, line2H, line3H } = toRefs(heightLists);
 
 const getCollectTime = () => {
   setInterval(() => {
     const { DD, MM, yyyy, hh, mm, ss, week } = getTimeData();
     datetime.date = `${yyyy}-${MM}-${DD}`;
     datetime.time = `${hh}:${mm}:${ss}`;
     datetime.week = `${week}`;
     let times = Date.now() - 24 * 60 * 60 * 1000; // ms
     datetime.collectTime = new Date(times).toLocaleString().split(",")[0];
   }, 1000);
 };
 
 const changeSettingTitle = () => {
   settingTitle.value = "漯河卷烟厂实时监控系统";
 };
 
 onMounted(() => {
   getCollectTime();
 });
 
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
 
 <style lang="scss">
 .screen-container {
   width: 100%;
   padding: 0 20px;
   background-color: #161522;
   color: #fff;
   box-sizing: border-box;
 }
 
 .fullscreen {
   position: fixed !important;
   top: 0 !important;
   left: 0 !important;
   width: 100vw !important;
   height: 100vh !important;
   background-color: #161522;
   color: #fff;
   margin: 0 !important;
   z-index: 9999;
 }
 
 .screen-header {
   width: 100%;
   height: 64px;
   font-size: 20px;
   position: relative;
 
   > div {
     img {
       width: 100%;
     }
   }
 
   .title {
     position: absolute;
     left: 50%;
     top: 50%;
     font-size: 30px;
     letter-spacing: 1.5px;
     transform: translate(-50%, -50%);
   }
 
   .title-right {
     text-align: center;
     position: absolute;
     right: 0px;
     top: 5%;
   }
 
   .qiehuan {
     width: 28px;
     height: 21px;
     cursor: pointer;
   }
 
   .logo {
     position: absolute;
     left: 0px;
     top: 50%;
     transform: translateY(-80%);
 
     a {
       text-decoration: none;
     }
   }
 }
 
 .resize {
   position: absolute;
   right: 20px;
   top: 20px;
   cursor: pointer;
 }
 
 // .setting-line-1 {
 //   height: calc(v-bind(line1H) * 1vh);
 //   border: 1px solid yellow;
 // }
 
 // .setting-line-3 {
 //   height: calc(v-bind(line2H) * 1vh);
 //   border: 1px solid blue;
 // }
 
 // .setting-line-2 {
 //   height: calc(v-bind(line3H) * 1vh);
 //   border: 1px solid green;
 // }
 
 // .setting {
 //    @include bg(red);
 // }
 
 // 定义变量
 
 // .setting{
 //    @include background-black;
 // }
 </style>
 