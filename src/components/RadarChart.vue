<script>
import { Radar, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Radar,
  mixins: [reactiveProp],
  props: ['options'],

  mounted () {
    this.renderChart(this.chartdata, this.options)
  },
  methods: {
    addData (chart, label, data) {
      chart.data.labels.push(label)
      chart.data.datasets.forEach(dataset => {
        dataset.data.push(data)
      })
      chart.update()
    },

    removeData (chart) {
      chart.data.labels.pop()
      chart.data.datasets.forEach(dataset => {
        dataset.data.pop()
      })
      chart.update()
    }
  }
}
</script>

<style>
.container {
  width: 700px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 10%;
}
</style>
