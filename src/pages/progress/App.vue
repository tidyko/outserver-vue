<template>
  <div id="app">
    <Cover v-bind:cover-list="coverList" v-bind:city-id="this.$route.query.cityid" />
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
</style>
