<template>
  <div id="app">
    <Cover :cover-list="coverList" />
  </div>
</template>

<script>
import Cover from './components/Cover.vue'
import data from './config/data.js'

export default {
  name: 'app',
  components: {
    Cover
  },
  data () {
    return {
      coverList: data.coverList
    }
  }
}
</script>

<style>
#app {
  background: #ffffff;
}
</style>
