<!-- 时间组件 -->
<template>
    <div class="date-box">
        <div class="date-date">
            {{ props.datetime.date }}&nbsp;<span class="date-day">&nbsp;{{ props.datetime.week }}</span>&nbsp;|&nbsp;<span class="date-day">{{ props.datetime.time }}</span>
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
.date-box{
    margin-top: 12px;
    font-size: 24px;
}
</style>
      