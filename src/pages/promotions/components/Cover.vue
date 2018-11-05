<template>
  <div id="cover-container">

    <template v-if="banner !=null && banner.length != 0">
      <img :src="banner.banner" id="cover_banner">
    </template>
    <template v-else>
      <img :src="defaultBanner" id="cover_banner">
    </template>

    <template v-if="cityCover !=null && cityCover.coverList.length != 0">
      <template v-for="(cover,coverIndex) in cityCover.coverList">
        <a :href="cover.url" :key="coverIndex">
          <img v-if="(coverIndex+1) % 3 == 1" src="../assets/a1.png" class="imgLeft2">
          <img v-if="(coverIndex+1) % 3 == 2" src="../assets/a2.png" class="imgLeft2">
          <img v-if="(coverIndex+1) % 3 == 0" src="../assets/a3.png" class="imgLeft2">{{cover.title}}<img src="../assets/arrow.png" class="imgRight">
        </a>
      </template>
    </template>

    <template v-for="(commonCover,commonCoverIndex) in commonCoverList">
      <a :href=" commonCover.url" :key="commonCoverIndex">
        <template v-if="cityCover !=null">
          <img v-if="(cityCover.coverList.length+1) % 3 == 1" src="../assets/a1.png" class="imgLeft2">
          <img v-if="(cityCover.coverList.length+1) % 3 == 2" src="../assets/a2.png" class="imgLeft2">
          <img v-if="(cityCover.coverList.length+1) % 3 == 0" src="../assets/a3.png" class="imgLeft2">
        </template>
        <template v-else>
          <img src="../assets/a1.png" class="imgLeft2">
        </template>{{commonCover.title}}<img src="../assets/arrow.png" class="imgRight">
      </a>
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
    commonCoverList: Array
  },
  methods: {
    openPage: function (url) {
      window.location.href= url;
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
  font-size: 18px;
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
  width: 20px;
  margin-bottom: -5px;
  margin-right: 10px;
}

.imgRight {
  float: right;
  height: 12px;
  margin-top: 17px;
}
</style>
    