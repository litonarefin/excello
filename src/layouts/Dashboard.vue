<template>
    <div class="dashboard-content">

        <info-box></info-box>
        <dashboard-chart></dashboard-chart>
        <dashboard-orders></dashboard-orders>
        <dashboard-others></dashboard-others>

    </div>
</template>

<script>
     import Info from '../components/Info.vue';
     import DashboardChart from '../components/DashboardChart.vue';
     import DashboardOrders from '../components/DashboardOrders.vue';
     import DashboardOthers from '../components/DashboardOthers.vue';

    export default {
         components: {
            InfoBox: Info,
            DashboardChart,
            DashboardOrders,
            DashboardOthers
         }
    }
</script>

<style>

</style>