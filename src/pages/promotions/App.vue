<template>
  <div id="app">
    <Cover :banner="banner" :default-banner="defaultBanner" :city-cover="cityCover" :common-cover-list="commonCoverList" />
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
        banner.cityId == this.$route.query.cityid
      )[0],
      defaultBanner: coverData.coverList.defaultBanner,
      cityCover: coverData.coverList.allCoverList.filter(cityCover => 
        cityCover.cityId == this.$route.query.cityid
      )[0],
      commonCoverList: coverData.coverList.commonCoverList
    }
  }
}
</script>

<style>
</style>
