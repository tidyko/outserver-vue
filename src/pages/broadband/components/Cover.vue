<template>
  <div id="cover-container">

    <template v-if="banner !=null && banner.length != 0">
      <img :src='requireSrc(banner.banner)' id="cover_banner">
    </template>
    <template v-else>
      <img :src='requireSrc(defaultBanner)' id="cover_banner">
    </template>

    <template v-if="cityCover !=null && cityCover.coverList.length != 0">
      <template v-for="(cover,coverIndex) in cityCover.coverList">
        <a :href="cover.url" :key="coverIndex">
          <img :src='requireSrc(cover.icon)' class="imgLeft2">{{cover.title}}<img src="../assets/arrow.png" class="imgRight">
        </a>
      </template>
    </template>
    <template v-else>
      <template v-for="(defaultCover,defaultCoverIndex) in defaultCoverList">
        <a :href=" defaultCover.url" :key="defaultCoverIndex">
          <img :src='requireSrc(defaultCover.icon)' class="imgLeft2">{{defaultCover.title}}<img src="../assets/arrow.png" class="imgRight">
        </a>
      </template>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Cover',
  props: {
    banner: Array,
    defaultBanner: String,
    cityCover: JSON,
    defaultCoverList: Array
  },
  methods: {
    openPage: function (url) {
      window.location.href= url;
    },
    requireSrc: function(src){
      return require("../assets/" + src)
    }
  }
}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}

body {
  background: #f4f6f9;
}

a {
  display: block;
  font-size: 17px;
  color: #000000;
  text-decoration: none;
  background: #ffffff;
  line-height: 60px;
  padding: 0 15px;
}

a:active {
  background: #f4f6f9;
  opacity: 0.9;
}

#cover_banner {
  width: 100%;
  display: block;
  margin-bottom: 10px;
}

.imgLeft2 {
  width: 24px;
  margin-bottom: -5px;
  margin-right: 10px;
}

.imgRight {
  float: right;
  height: 12px;
  margin-top: 17px;
}
</style>
    