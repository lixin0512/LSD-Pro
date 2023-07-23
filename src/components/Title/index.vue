<style lang="scss" scoped>
.resource_left_title {
  height: 28px;
  line-height: 28px;
  .left_title_logo {
    width: 20px;
    height: 20px;
    vertical-align: middle;
  }
  span {
    font-size: 20px;
    font-weight: bold;
    color: #fefefe;
    vertical-align: middle;
  }
}
</style>
<template>
  <div class="resource_left_title" :style="{ paddingLeft, paddingTop }">
    <img class="left_title_logo" src="@/assets/images/title_tip@2x.png" />&nbsp;
    <span>{{ titlename }}</span>
  </div>
</template>

<script setup>
// import { inject } from "vue";
// let titleProps = inject("titleProps");
// let { titlename, marginLeft, marginTop } = titleProps;

let titleProps = defineProps({
  titlename: {
    type: String,
    default: "标煤年累计(kgce)",
  },
  paddingLeft: {
    type: String,
    default: "35px",
  },
  paddingTop: {
    type: String,
    default: "15px",
  },
});
</script>
