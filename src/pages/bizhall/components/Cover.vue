<template>
  <div id="cover-container">
    <template v-for="(cover,index) in coverList">
      <div :key="index" @click="openPage(cover.url)" class="cover">
        <template v-if="index === 0">
          <span class="cover_title">{{cover.title}}</span>
          <img v-bind:src="cover.banner" class="cover_img_top">
        </template>
        <template v-else>
          <img v-bind:src="cover.banner" class="cover_img_other">
        </template>
        <span class="cover_desc" v-html="cover.desc"></span>
      </div>
      <span v-if="index!=coverList.length-1" :key="index" class="line"></span>
    </template>
  </div>
</template>

<script>
import data from '../config/data.js'

export default {
  name: 'Cover',
  methods: {
    openPage: function (url) {
      window.location.href= url;
    }
  },
  data () {
    return {
      coverList: data.coverList
    }
  },
}
</script>

<style lang="less">
.cover {
  padding: 15px;
}

.cover img {
  width: 100%;
}

.cover_title {
  font-size: 24px;
  font-weight: bolder;
}

.cover_img_top {
  margin: 15px 0 8px;
}

.cover_img_other {
  margin-bottom: 8px;
}

.cover_desc {
  font-size: 14px;
  color: #666666;
}

.line {
  display: block;
  height: 1px;
  background: #eeeeee;
  padding: 0 15px;
}
</style>
    