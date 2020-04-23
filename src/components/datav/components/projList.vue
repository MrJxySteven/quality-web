<template>
  <div class="itemList">
      <dv-border-box-7 style="width:49%" class="proj-tab">
        <div class="cc-header">
          <div class="titleStyle">
            新增项目列表
            <span class="more">更多</span>
          </div>
        </div>
        <dv-scroll-board :config="newProjListCof" style="width:100%;height:170px" />
      </dv-border-box-7>
      <dv-border-box-7 style="width:49%" class="proj-tab">
        <div class="cc-header">
          <div class="titleStyle">
            最新动态
            <span class="more">更多</span>
          </div>
        </div>
        <dv-scroll-board :config="progressListCof" style="width:100%;height:170px" />
      </dv-border-box-7>
    </div>
</template>

<script>
import { getProgressList, getNewProjList } from "@/api/interface";
export default {
  name: "mapTab",
  components: {},

  data() {
    return {
      newProjListCof: {
        header: ["单位", "项目名称"],
        data: [
          ["中交路建", "中交路建成都地铁17号线（北方公司）"],
          ["四航局", "开春高速总承包部TJ06施工段项目"],
          ["四航局", "开春高速总承包部TJ05施工段项目"],
          ["四航局", "开春高速总承包部TJ04施工段项目"],
          ["四航局", "珠海城际项目"]
        ],
        // columnWidth: [50, 170, 300],
        align: ["center"],
        // rowNum: 7,
        headerBGC: "#1981f6",
        // headerHeight: 45,
        oddRowBGC: "rgba(0, 44, 81, 0.8)",
        evenRowBGC: "rgba(10, 29, 50, 0.8)"
      },
      progressListCof: {
        header: ["单位", "项目名称"],
        data: [
          ["中交路建", "G316线两当至徽县项目经理部"],
          [
            "路桥轨道交通事业部",
            "中国交建松原至通榆（吉蒙界）公路SY01合同段项目"
          ],
          ["机电局", "云南华丽项目"],
          ["机电局", "京津中关村科技城项目"],
          ["一航局", "莆田南日岛海上风电场一期项目A区IV标段基础工程"]
        ],
        // index: true,
        // columnWidth: [50, 170, 300],
        align: ["center"],
        // rowNum: 7,
        headerBGC: "#1981f6",
        // headerHeight: 45,
        oddRowBGC: "rgba(0, 44, 81, 0.8)",
        evenRowBGC: "rgba(10, 29, 50, 0.8)"
      },
    };
  },
  mounted(){
    // this.getProgressList();
    // this.getNewProjList();
  },
  methods:{
     //新增项目列表
    getNewProjList() {
      getNewProjList().then(res => {
        console.log(`新增项目列表==`, res);
          let newDara = [];
          for (let item of res.data) {
            let arr = [item.CUONAME, item.PRONAME];
            newDara.push(arr);
          }
          this.newProjListCof.data = newDara;
          this.newProjListCof = { ...this.newProjListCof };
      });
    },
    //获取最新动态
    getProgressList() {
      getProgressList()
        .then(res => {
          console.log(`动态项目列表==`, res);
          let newDara = [];
          for (let item of res.data) {
            let arr = [item.CUONAME, item.PRONAME];

            newDara.push(arr);
          }
          this.progressListCof.data = newDara;
          this.progressListCof = { ...this.progressListCof };
        });
    }
  }
};
</script>

<style scoped lang="less">
.itemList {
  width: 100%;
  display: flex;
  height: 24%;
   box-sizing: border-box;
  justify-content: space-between;
}
.cc-header {
  height: 25px;
  text-align: center;
  // font-size: 20px;
}
.proj-tab {
  box-sizing: border-box;
  height: 100%;
  overflow: hidden;
}
.titleStyle {
  // font-size: 20px;
  color: #f3fd4f;
  .more {
    position: absolute;
    font-size: 0.8em;
    right: 10px;
    color: #ccc;
    text-decoration: underline;
    cursor: pointer;
    line-height: 25px;
  }
}
</style>
