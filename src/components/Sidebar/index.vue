<template>
  <div class="app-container">
    <Transition name="fade">
      <el-aside v-if="isFold" class="aside">
        <div class="logo-wrap">
          <img class="logo" src="@/assets/images/logo.png" />
          <router-link :to="'/'" class="logo-title cur-pointer"
            >漯河卷烟厂大屏系统</router-link
          >
        </div>
        <el-tabs type="border-card" ref="borderCard" class="border-card">
          <el-tab-pane label="数据库">
            <DataSource></DataSource>
          </el-tab-pane>
          <el-tab-pane label="属性列表">
            <Attribute></Attribute>
          </el-tab-pane>
          <el-tab-pane label="数据列表">
            <Options></Options>
          </el-tab-pane>
        </el-tabs>
      </el-aside>
    </Transition>

    <div class="el-tabs-fold" @click="changeWidth"></div>
    <Main class="main"></Main>
  </div>
</template>

<script setup>
import DataSource from "comps/Sidebar/DataSource.vue";
import Attribute from "comps/Sidebar/Attribute.vue";
import Options from "comps/Sidebar/Options.vue";
import Main from "@/views/SettingView.vue";
import { ref, onMounted } from "vue";

let borderCard = ref(null);
let isFold = ref(true);
let foldWidth = ref("220px");
let changeWidth = () => {
  isFold.value = !isFold.value;
  foldWidth.value = isFold.value ? "220px" : "-80px";
};

onMounted(() => {
  // let height = borderCard.value.$el.clientHeight;
});
</script>

<style lang="scss" scoped>
.app-container {
  display: flex;
}
.aside {
  width: 300px;
  height: 100vh;
  overflow: auto;
  max-width: 300px !important;
  background-color: $bg-color-w;
}

.logo-wrap {
  display: flex;
  align-items: center;
  width: 100%;
  height: 4rem;
  line-height: 4rem;
  .logo {
    width: 2rem;
    height: 2rem;
    margin: 8px 0.5rem;
  }
  .logo-title {
    font-size: 1.5rem;
    font-weight: bold;
    color: #000;
  }
}

.el-tabs-fold {
  position: absolute;
  top: 45%;
  left: v-bind(foldWidth);
  // left: calc(15vw - 50px);
  width: 80px;
  height: 40px;
  border-radius: 0 40px 40px 0;
  border-right: 30px solid rgba(255, 255, 255, 0.2);
  cursor: pointer;
  z-index: 999;
}


.fade-enter-active {
  transition: width 0.5s ease-out;
}

.fade-leave-active {
  transition: width 1s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-from,
.fade-leave-to {
  width: 0;
  display: none;
}

// .logo-wrap {
//   display: flex;
//   width: 100%;
//   height: 3rem;
// }

// .main {
//   float: left;
// }

// .logo {
//   width: 2rem;
//   height: 2rem;
//   margin: 8px 0.5rem;
// }

// .logo-span {
//   display: inline-block;
//   font-size: $font-big;
//   margin: 11px 0px;
// }

// .el-tabs {
//   // height: calc(100vh - 3rem);
// }

// .el-tabs-fold {
//   position: absolute;
//   top: 45vh;
//   // left: calc(15vw - 50px);
//   width: 80px;
//   height: 40px;
//   border-radius: 0 40px 40px 0;
//   border-right: 30px solid rgba(255, 255, 255, .1);
//   cursor: pointer;
//   z-index: 999;
// }

// .main {
//   width: v-bind(mainWidth);
// }

// .fade-enter-active {
//   transition: width 1s ease-out;
// }

// .fade-leave-active {
//   transition: width 1s cubic-bezier(1, 0.5, 0.8, 1);
// }

// .fade-enter-from,
// .fade-leave-to {
//   width: 0;
//   opacity: 0;
// }
</style>
