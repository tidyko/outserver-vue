<template>
  <div id="app">
    <Cover :theme="theme" :city-cover="cityCover" />
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
      theme: data.coverList.theme,
      cityCover: data.coverList.allCoverList.filter(cityCover => 
        //箭头函数传递组件作用域
        cityCover.cityId == this.$route.query.cityid
      )[0]
    }
  }
}
</script>

<style>
#app {
  background: #ffffff;
}
</style>
