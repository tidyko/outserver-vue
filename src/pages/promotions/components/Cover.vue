<template>
  <div id="cover-container">
    <template v-for="cityCover in coverList.allCoverList">
      <template v-for="(cover,cityCoverindex) in cityCover.coverList" v-if="cityCover.cityId == cityId">
        <div :key="cityCoverindex" @click="openPage(cover.url)" class="cover">
          <template v-if="cityCoverindex === 0">
            <span class="cover_theme">{{coverList.theme}}</span>
            <img v-bind:src="cover.banner" class="cover_img_top">
          </template>
          <template v-else>
            <img v-bind:src="cover.banner" class="cover_img_other">
          </template>
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
    coverList: JSON,
    cityId: Number
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

.cover img {
  width: 100%;
}

.cover_theme {
  font-size: 24px;
  font-weight: bolder;
}

.cover_img_top {
  margin: 15px 0 8px;
}

.cover_img_other {
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
    