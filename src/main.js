import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import api from "./api/index.js";
import { createPinia } from "pinia";
import "@/styles/normalize.scss";
import "styles/style.scss";
import * as Elicons from "@element-plus/icons-vue";
//引入Elmessage和Elloading的css样式文件
import "element-plus/theme-chalk/el-loading.css";
import "element-plus/theme-chalk/el-message.css";
import * as echarts  from "echarts";
import { v4 as uuidv4 } from "uuid";
import 'animate.css';
import DataVVue3 from '@kjgl77/datav-vue3'
// import "animate.css/animate.min.css";
import 'echarts-liquidfill'
import VueParticles from 'vue-particles'



const app = createApp(App);

Object.keys(Elicons).forEach((key) => {
  app.component(key, Elicons[key]);
});
//封装全局变量
app.provide("global", {
  api,
  echarts,
  uuidv4
});
// 全局注册axios、echarts请求  不推荐
// app.config.globalProperties.$axios = api;
// app.config.globalProperties.$echarts = window.echarts;
app.use(router);
app.use(DataVVue3);
app.use(VueParticles);
app.use(createPinia());
app.mount("#app");

