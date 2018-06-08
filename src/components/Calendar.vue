<template>
  <lunar-calendar
  @change="onChange"
  :firstDayOfWeek="parseInt(2)"
  :disableDaysBeforeToday="false"
  :defaultDate="0"
  :showLunarButton="false"
  :showLunar="false"
  :lang="en"
  :dateLang="en"
  ></lunar-calendar>
</template>


<script>
import LunarCalendar from 'vue-lunar-calendar'
export default{
    components:{
        LunarCalendar
    }
}
</script>

<style lang="scss">
    .calendar-month{
        margin-left: 0 !important;
    }
    .week-days span{
      width: 13% !important;
      font-size: 13px !important;
    }
    .ayou-day-cell{
        width: 14% !important;
        height: 37px !important;
    }
    .lunar{
        padding: 0 !important;
    }
    .solar{
        bottom: initial !important;
        padding: 9px 24px 0px 0 !important;
    }
</style>