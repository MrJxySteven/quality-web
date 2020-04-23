<template>
  <div id="top-header">
    <!-- <dv-decoration-8 class="header-left-decoration" /> -->
    <!-- <dv-decoration-5 class="header-center-decoration" /> -->
    <div class="logoWarp">
      <img src="./img/logo_zj.png" alt="logo">
    </div>
    <dv-decoration-8 class="header-right-decoration" :reverse="true" />
    <div class="center-title">项目数据总览</div>
  </div>
</template>

<script>
export default {
  name: "TopHeader"
};
</script>

<style lang="less">
#top-header {
  position: relative;
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;
  background-color:#0a1f3a;
  

  .header-center-decoration {
    width: 40%;
    height: 60px;
    margin-top: 30px;
  }

  .logoWarp{
    padding-top: 15px;
    height: 75px;
    width: 210px;
    // float: left;
    text-align: center;
    color: #04538b;
    img{
      vertical-align: top;
    display: inline-block;
    width: 174px;
    height: 60px;
    background-position: left center;
    background-repeat: no-repeat;
    }
  }
  .header-left-decoration,
  .header-right-decoration {
    width: 25%;
    height: 60px;
  }

  .center-title {
    position: absolute;
    font-size: 36px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    left: 50%;
    top: 15px;
    color: rgb(25, 129, 246);
    transform: translateX(-50%);
  }
}
</style>
