<template>

    <area-chart
        id="area"
        :data="areaData"
        xkey="period"
        ykeys='[ "iphone", "imac", "ibook", "samsung", "android" ]'
        labels='[ "iPhone", "iMac", "iBook", "Samsung", "Android" ]'
        line-colors= '[ "#26DAD2", "#fc6180", "#62d1f3", "#ffb64d", "#4680ff" ]'
        resize="true"
        grid="false"
        grid-text-weight="bold"
        hide-hover="auto"

        point-size= 0
        line-width= 0
        fill-opacity= 0.8
        behave-like-line= "true"
        grid-line-color= "#e0e0e0"
    >
    </area-chart>

</template>

<script>
// Do not forget to import raphael
import Raphael from 'raphael/raphael'
import jquery from 'jquery'
global.Raphael = Raphael

import Vue from 'vue'
import { AreaChart } from 'vue-morris'

export default {
    data() {
        return{
          areaData: [
                {
                    period: '2001',
                    iphone: 90,
                    imac: 60,
                    ibook: 90,
                    samsung: 10,
                    android: 30
                }, {
                    period: '2002',
                    iphone: 10,
                    imac: 60,
                    ibook: 40,
                    samsung: 80,
                    android: 120
                }, {
                    period: '2003',
                    iphone: 120,
                    imac: 10,
                    ibook: 90,
                    samsung: 30,
                    android: 50
                }, {
                    period: '2004',
                    iphone: 0,
                    imac: 0,
                    ibook: 120,
                    samsung: 0,
                    android: 0
                }, {
                    period: '2005',
                    iphone: 40,
                    imac: 30,
                    ibook: 90,
                    samsung: 150,
                    android: 50
                }, {
                    period: '2006',
                    iphone: 160,
                    imac: 75,
                    ibook: 30,
                    samsung: 60,
                    android: 90
                }, {
                    period: '2007',
                    iphone: 10,
                    imac: 120,
                    ibook: 40,
                    samsung: 60,
                    android: 30
                }
              ]
        }

    },
    components: {
        AreaChart
    }

}

</script>


<style lang="scss">
    .morris-hover.morris-default-style {
        border-radius: 2px;
        padding: 10px 12px;
        color: #666;
        background: rgba(0, 0, 0, 0.7);
        border: none;
        top:0;
        color: #fff !important;
    }
</style>