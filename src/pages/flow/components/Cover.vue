<template>
  <div id="cover-container">
    <span class="cover_theme">{{theme}}</span>
    <template v-if="cityCover !=null && cityCover.coverList.length != 0">
      <template v-for="(cover,cityCoverindex) in cityCover.coverList">
        <div :key="cityCoverindex" @click="openPage(cover.url)" class="cover">
          <img :src="cover.banner" class="cover_img">
          <span class="cover_title">{{cover.title}}</span><br>
          <span class="cover_desc" v-html="cover.desc"></span>
        </div>
        <span v-if="index!=cityCover.coverList.length-1" :key="cityCoverindex" class="line"></span>
      </template>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Cover',
  props: {
    theme: String,
    cityCover: Array
  },
  methods: {
    openPage: function (url) {
      window.location.href= url;
    }
  }
}
</script>

<style lang="less">
.cover {
  padding: 15px;
}

.cover_theme {
  font-size: 24px;
  font-weight: bolder;
  padding: 15px;
}

.cover_img {
  width: 100%;
  margin-bottom: 8px;
}

.cover_title {
  font-size: 17px;
  color: #333333;
  font-weight: bold;
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
    