<template>
  <div id="cover-container">
    <div class="cover" @click="openPage('https://im.189.cn/weixinopen/outserver/oauth/getOpenid?url=aHR0cHM6Ly9pbS4xODkuY24veG10L3BhZ2VPcGVuTG9nL3JlbGF5LmRvP3VybD1hSFIwY0RvdkwybHRMakU0T1M1amJpOTRiWFF2YjNCbGNtRjBMMmRsZEU5d1pYSmhkRXhwYzNSRGVpNWtidz09Jm9wPXl5dGN6Y2Q=')">
      <span class=" cover_title">营业厅服务</span>
      <img src="../assets/bizhall_1.jpg" class="cover_img_top">
      <span class="cover_desc">可通过筛选发现附近营业厅及查询营业厅相关信息</span>
    </div>

    <span class="line"></span>

    <div class="cover" @click="openPage('http://im.189.cn/weixinopen/outserver/oauth/getOpenid?url=aHR0cHM6Ly9pbS4xODkuY24veG10L3BhZ2VPcGVuTG9nL3JlbGF5LmRvP3VybD1hSFIwY0RvdkwybHRMakU0T1M1amJpOXBiVmQ0VUdGamEyRm5aWE12Y0dGamEyRm5aWE12YjNCbFlYSjBMbVJ2Jm9wPXl5dHl5Y2Q=')">
      <img src="../assets/bizhall_2.jpg" class="cover_img_other">
      <span class="cover_desc">预约营业厅办理业务及时查看排队情况，<br>使用前确认已经打开授权微信获取定位功能</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cover',
  methods: {
    openPage: function (url) {
      window.location.href= url;
    }
  }
}
</script>

<style>
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
    