<template>
  <div class="small">
    <button @click="fillData()">Randomize</button>
    <radar-chart :chart-data="dataCollection" :options="options"></radar-chart>
  </div>
</template>

<script>
import RadarChart from './RadarChart'
export default {
  components: {
    RadarChart
  },
  data () {
    return {
      dataCollection: null,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scale: {
          ticks: {
            suggestedMin: 0,
            suggestedMax: 10
          }
        }
      }
    }
  },
  methods: {
    fillData () {
      this.dataCollection = {
        labels: ['Mut', 'Offenheit', 'Transparenz', 'Respekt'],
        datasets: [
          {
            label: 'Marian',
            backgroundColor: 'rgba(255, 114, 114, 0.4)',
            data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
          },
          {
            label: 'Klaus',
            backgroundColor: 'rgba(114, 255, 114, 0.4)',
            data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
          }
        ]
      }
    },
    getRandomInt () {
      return Math.floor(Math.random() * 10 + 1)
    }
  }
}
</script>
<style>
</style>
