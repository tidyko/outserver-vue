<template>
  <div id="cover-container">
    <img v-bind:src="coverList.banner" id="cover_banner">
    <template v-for="cityCover in coverList.allCoverList">
      <template v-for="(cover,cityCoverindex) in cityCover.coverList" v-if="cityCover.cityId == cityId">
        <a v-bind:href="cover.url" :key="cityCoverindex">
          <img v-bind:src="cover.icon" class="imgLeft2">{{cover.title}}<img src="../assets/arrow.png" class="imgRight">
        </a>
      </template>
    </template>

  </div>
</template>

<script>
export default {
  name: 'Cover',
  props: {
    coverList: JSON,
    cityId: Number
  },
  methods: {
    openPage: function (url) {
      window.location.href= url;
    }
  },
  data () {
    return {
      defaultCoverFlag : true
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
    