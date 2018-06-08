<script>
import { Bar } from 'vue-chartjs'

export default{
  extends: Bar,
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ["M", "T", "W", "T", "F", "S", "S"],
      datasets: [{
          label: 'Vue JS',
          data: [12, 19, 3, 17, 28, 24, 7],
          backgroundColor: "#42b983"
        }, {
          label: 'React JS',
          data: [30, 29, 5, 5, 20, 3, 10],
          backgroundColor: "#61dafb"
        }]
    },
     {
      maintainAspectRatio: false,
      legend: {
        display: true
      },
      scales: {
        xAxes: [{
          display: false,
          categoryPercentage: 1,
          barPercentage: 0.5
        }],
        yAxes: [{
          display: false
        }]
      }
    })
  }
}
</script>
