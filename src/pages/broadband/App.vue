<template>
  <div id="app">
    <Cover v-bind:banner="banner" v-bind:default-banner="defaultBanner" v-bind:city-cover="cityCover" v-bind:default-cover-list="defaultCoverList" />
  </div>
</template>

<script>
import Cover from './components/Cover.vue'
import coverData from './config/data.js'

export default {
  name: 'app',
  components: {
    Cover
  },
  data () {
    return {
      banner: coverData.coverList.allBannerList.filter(banner => 
        //箭头函数传递组件作用域
        banner.cityId == this.$route.query.cityid
      )[0],
      defaultBanner: coverData.coverList.defaultBanner,
      cityCover: coverData.coverList.allCoverList.filter(cityCover => 
        cityCover.cityId == this.$route.query.cityid
      )[0],
      defaultCoverList: coverData.coverList.defaultCoverList
    }
  }
}
</script>

<style>
</style>
