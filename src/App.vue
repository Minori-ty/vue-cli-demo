<template>
  <div id="app">
    <h1>{{ date }}</h1>
  </div>
</template>

<script>
import moment from 'moment'
import request from './utils/request'

export default {
  name: 'App',
  components: {},
  data() {
    return {
      moment,
      date: '',
    }
  },
  created() {
    this.date = this.moment().locale('zh-cn').format('LL LTS')
    this.fn()
    console.log(request)
  },
  methods: {
    async fn() {
      try {
        const { data } = await request.get(
          'http://127.0.0.1:4523/m1/1055430-0-default/api/v1/warnings/findwarningsbyuserid/123'
        )
        console.log(data)
      } catch (e) {
        console.log(e)
      }
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
