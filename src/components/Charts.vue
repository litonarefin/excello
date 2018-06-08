<template>
  <div class="animated fadeIn">
    <div class="card-columns">
      <card header-text="Line Chart">
        <div class="chart-wrapper">
          <line-chart-js/>
        </div>
      </card>
      <card header-text="Bar Chart" class="mb-4">
        <div class="chart-wrapper mb-4" >
          <bar-chart-js style="height:300px"/>
        </div>
      </card>
      <card header-text="Doughnut Chart">
        <div class="chart-wrapper">
          <doughnut-chart/>
        </div>
      </card>
      <card header-text="Radar Chart">
        <div class="chart-wrapper">
          <radar-chart/>
        </div>
      </card>
      <card header-text="Pie Chart">
        <div class="chart-wrapper">
          <pie-chart/>
        </div>
      </card>
      <card header-text="Polar Area Chart">
        <div class="chart-wrapper">
          <polar-area-chart/>
        </div>
      </card>
    </div>
  </div>
</template>
<script>
import BarChartJs from './charts/chartjs/BarChartJs.vue';
import LineChartJs from './charts/chartjs/LineChartJs.vue';
import DoughnutChart from './charts/chartjs/DoughnutChart.vue';
import RadarChart from './charts/chartjs/RadarChart.vue';
import PieChart from './charts/chartjs/PieChart.vue';
import PolarAreaChart from './charts/chartjs/PolarAreaChart.vue';

export default {
  name: 'charts',
  components: {
    BarChartJs,
    LineChartJs,
    DoughnutChart,
    RadarChart,
    PieChart,
    PolarAreaChart
  }
}
</script>
