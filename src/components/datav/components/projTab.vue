<template>
  <div class="projTab">
    
    <dv-border-box-7 style="width:49%" class="proj-tab">
      <div class="cc-header">
        <div class="titleStyle">创优申报统计</div>
      </div>
      <div class="mainWrap">
          <dv-scroll-board :config="config11" style="width:100%;height:200px" />
      </div>
    </dv-border-box-7>
    <dv-border-box-7 style="width:49%" class="proj-tab">
      <div class="cc-header">
        <div class="titleStyle">计划创优统计</div>
      </div>
      <div class="mainWrap">
          <dv-scroll-board :config="config22" style="width:100%;height:200px"  />
      </div>
    </dv-border-box-7>
  </div>
</template>

<script>
import { getExceByYear } from "@/api/interface"
export default {
  name: "mapTab",
  components: {},

  data() {
    return {
      config11: {
        header: ["奖项", "2016","2017","2018","2019","2020"],
        data: [
          ["鲁班", "0","0","123","41","0",],
          ["中交优", "0","0","194","61","0",],
          ["国优", "0","0","532","267","9",]
        ],
        // columnWidth: [50, 170, 300],
        align: ["center"],
        // rowNum: 6,
        headerBGC: "#1981f6",
        // headerHeight: 45,
        oddRowBGC: "rgba(0, 44, 81, 0.8)",
        evenRowBGC: "rgba(10, 29, 50, 0.8)"
      },
      config22: {
        header: ["奖项", "2018","2019","2020","2021","2022"],
        data: [
          ["鲁班", "0","0","0","0","0",],
          ["中交优", "0","0","0","0","0",],
          ["国优", "0","0","0","4","3",]
        ],
        // columnWidth: [50, 170, 300],
        align: ["center"],
        // rowNum: 6,
        headerBGC: "#1981f6",
        // headerHeight: 45,
        oddRowBGC: "rgba(0, 44, 81, 0.8)",
        evenRowBGC: "rgba(10, 29, 50, 0.8)"
      }
    };
  },
  mounted(){
    let param = {oid:'104396',grule:'-104396-'}
    getExceByYear(param).then(res => {
      console.log(`res==`,res)
      this.list = res
    })
  }
};
</script>

<style scoped lang="less">
.projTab {
  width: 100%;
  height: 22%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  margin-top: 1%;
}
.proj-tab {
  box-shadow: 0 0 3px blue;
  // background-color: rgba(6, 30, 93, 0.5);
  border-top: 2px solid rgba(1, 153, 209, 0.5);
  box-sizing: border-box;
  // padding: 0px 30px;

  .cc-header {
    height: 25px;
    text-align: center;
    // font-size: 20px;
  }
  .titleStyle{
    color: #f3fd4f
    
  }
  .title{
    color: #0f3e68;
    font-size: 1em;
    padding: 10px 15px;
  }

  .mainWrap {
    height:100%;
    //   box-sizing: border-box;
    // height: 100%;
    // overflow: hidden;
  }
}
</style>
