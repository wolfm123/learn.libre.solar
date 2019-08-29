
<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  data: () => ({
    chartdata: {
      labels: ['1', '2', '3', '4', '5', '6'],
      datasets: [
        {
          label: 'Current I',
          backgroundColor: 'transparent',
          //pointBackgroundColor: 'white',
          borderWidth: 1,
          //pointBorderColor: '#249EBF',
          borderColor:'#000000',
          data: [90,20,30,10,40, 50]
        },

        {
          label: 'Voltage (V)',
          backgroundColor: 'transparent',
          //pointBackgroundColor: 'white',
          borderWidth: 1,
          //pointBorderColor: '#249EBF',
          borderColor:'#b40000',
          data: [100,30,40,100,40,0]
        }
      ]
    },
    options: {
        scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }],
            xAxes: [ {
              gridLines: {
                display: true
              }
            }]
          },
          legend: {
            display: true
          },
      responsive: true,
      maintainAspectRatio: false
    }
  }),

  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}
</script>

<style>
</style>