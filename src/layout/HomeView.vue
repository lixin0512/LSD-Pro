<!-- <template>
   <el-button :plain="true" @click="open1">message</el-button>
   <div class="text-black-300">1234</div>
 </template> -->
 
 <!-- <script setup>
 import Msg from '@/utils/message';
 const msg = new Msg();
 const open1 = () => {
   msg.error('This is a message.') ;
 };

 </script> -->


<template>
  <div>测试动画</div>
  <div class="container-fluid">
     <h1 class="animate__animated animate__bounce" style="color:#000">An animated element</h1>
  </div>
</template>

<script setup>
import { ref, reactive, toRefs } from "vue";

</script>

<style lang="scss" scoped></style>