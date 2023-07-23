<!-- 时间组件 -->
<template>
  <div class="date-date">
    {{ datetime.date }}&nbsp;<span class="date-day"
      >&nbsp;{{ datetime.week }}</span
    >&nbsp;|&nbsp;<span class="date-day">{{ datetime.time }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  datetime: {
    type: Object,
    default: () => ({
      time: "",
      date: "",
      week: "",
    }),
  },
});
</script>

<style lang="scss">
.date-date {
  margin-top: 12px;
  font-size: 24px;
}
</style>
