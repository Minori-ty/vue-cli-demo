<template>
  <div id="app">
    <h1>{{ date }}</h1>
  </div>
</template>

<script>
import moment from 'moment'

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
