<!-- 时间组件 -->
<template>
    <div class="date-box">
        <div class="date-time" > {{ props.datetime.time }} </div>
        <div class="date-date">
            {{ props.datetime.date }}&nbsp;<span class="date-day">|&nbsp;{{ props.datetime.week }}</span>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    datetime: {
        type: Object,
        default: () => ({
            time: '',
            date: '',
            week: ''
        })
    }
})

</script>

<style lang="scss">
.date-time{
    font-size: 26px;
}
</style>
      