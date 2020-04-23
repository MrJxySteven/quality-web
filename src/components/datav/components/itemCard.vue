<template>
  <div class="itemContent">
    <div class="itemCard">
      <dv-border-box-13 class="cardMain">
        <p class="chartTitle">鲁班</p>
        <div class="item">
          <div class="pieChart">
            <dv-active-ring-chart :config="lubanCof" style="width:70%;height:100%" />
            <Label-Tag style="flex:1" :config="labelConfig" />
          </div>
          <dv-decoration-2 class="decoration-1" :reverse="true" style="width:5px;" />

          <div class="statistics">
            <div class="statisticsItem">
              <p class="num">{{objData.luban_all.ALLNUM}}</p>
              <p class="text">总数</p>
            </div>
            <div class="statisticsItem">
              <p class="num">{{objData.luban_all.RECOMMEND}}</p>
              <p class="text">集团推荐</p>
            </div>
          </div>
        </div>
      </dv-border-box-13>

      <dv-border-box-13 class="cardMain">
        <p class="chartTitle">国优</p>
        <div class="item">
          <div class="pieChart">
            <dv-active-ring-chart :config="guojiaCof" style="width:70%;height:100%" />
            <Label-Tag style="flex:1" :config="labelConfig" />
          </div>
          <dv-decoration-2 class="decoration-1" :reverse="true" style="width:5px;" />
          <div class="statistics">
            <div class="statisticsItem">
              <p class="num">{{objData.guojia_all.ALLNUM}}</p>
              <p class="text">总数</p>
            </div>
            <div class="statisticsItem">
              <p class="num">{{objData.guojia_all.RECOMMEND}}</p>
              <p class="text">集团推荐</p>
            </div>
          </div>
        </div>
      </dv-border-box-13>
      <dv-border-box-13 class="cardMain">
        <p class="chartTitle">中交优</p>
        <div class="item">
          <div class="pieChart">
            <dv-active-ring-chart :config="zhongjiaoCof" style="width:70%;height:100%" />
            <Label-Tag style="flex:1" :config="labelConfig" />
          </div>
          <dv-decoration-2 class="decoration-1" :reverse="true" style="width:5px;" />
          <div class="statistics">
            <div class="statisticsItem">
              <p class="num">{{objData.zj_all.ALLNUM}}</p>
              <p class="text">总数</p>
            </div>
            <div class="statisticsItem">
              <p class="num">{{objData.zj_all.DOMESTIC}}</p>
              <p class="text">境内</p>
            </div>
            <div class="statisticsItem">
              <p class="num">{{objData.zj_all.NDOMESTIC}}</p>
              <p class="text">境外</p>
            </div>
          </div>
        </div>
      </dv-border-box-13>
    </div>

    <proj-list></proj-list>
  </div>
</template>

<script>
import { getProTypeExce } from "@/api/interface";
import scrollBoard from "../scrollBoard";
import LabelTag from "./LabelTag";
import projList from "./projList";

export default {
  name: "itemCard01",
  components: {
    scrollBoard,
    LabelTag,
    projList
  },
  data() {
    return {
      objData: {
        luban_all: {
          ALLNUM: "16",
          RECOMMEND: "0"
        },
        guojia_all: {
          ALLNUM: "25",
          RECOMMEND: "0"
        },
        zj_all: {
          ALLNUM: "79",
          DOMESTIC: "46",
          NDOMESTIC: "33"
        },
        luban: [],
        guojia: [],
        zhongjiao:[]
      },

      option1: {},
      lubanCof: {
        title: "luban",
        data: [
         {
            name: "公路",
            value: 118
          },
          {
            name: "水运",
            value: 66
          },
          {
            name: "铁路",
            value: 17
          },
          {
            name: "市政",
            value: 29
          }
        ],
        color: ["#00baff", "#3de7c9", "#fff", "#ffc530", "#469f4b"],
        radius: "65%",
        activeRadius: "75%",
        digitalFlopStyle: {
          fontSize: 18
        }
      },
      guojiaCof: {
        title: "单位",
        data: [
          {
            name: "公路",
            value: 118
          },
          {
            name: "水运",
            value: 66
          },
          {
            name: "铁路",
            value: 17
          },
          {
            name: "市政",
            value: 29
          }
        ],
        color: ["#00baff", "#3de7c9", "#fff", "#ffc530", "#469f4b"],
        radius: "65%",
        activeRadius: "75%",
        digitalFlopStyle: {
          fontSize: 18
        }
      },
      zhongjiaoCof: {
        title: "单位",
        data: [
          {
            name: "公路",
            value: 332
          },
          {
            name: "水运",
            value: 210
          },
          {
            name: "铁路",
            value: 35
          },
          {
            name: "市政",
            value: 137
          }
        ],
        color: ["#00baff", "#3de7c9", "#fff", "#ffc530", "#469f4b"],
        radius: "65%",
        activeRadius: "75%",
        digitalFlopStyle: {
          fontSize: 18
        }
      },
      labelConfig: {
        data: ["公路", "水运", "铁路", "市政"]
      }
    };
  },
  mounted() {
    this.createChart1();
    this.getProTypeExce();
  },
  methods: {
    createChart1() {
      this.option1 = {
        title: {
          text: "工程类型统计",
          style: {
            fill: "#4169e1",
            fontSize: 17,
            textAlign: "center",
            textBaseline: "bottom"
          }
        },
        legend: {
          show: true,
          data: ["单位", "水运", "轨道交通", "市政"],
          orient: "vertical",
          textStyle: {
            fontFamily: "Arial",
            fontSize: 13,
            fill: "#fff"
          }
        },
        series: [
          {
            // name: "单位",
            type: "pie",
            radius: ["20%", "40%"],
            data: [
              { name: "公路", value: 93 },
              { name: "水运", value: 32 },
              { name: "轨道交通", value: 65 },
              { name: "市政", value: 44 }
            ],
            outsideLabel: {
              show: true
            },

            insideLabel: {
              show: false
            }
          }
        ]
      };
    },

    //按类型分别统计各奖项
    getProTypeExce() {
      getProTypeExce().then(res => {
        let resObj = res.data;

        //项目总数和集团推荐数
        this.objData.luban_all = resObj.luban_all;
        this.objData.guojia_all = resObj.guojia_all;
        this.objData.zj_all = resObj.zj_all;

        //各种类型创优项目数
        let newData1 = [];
        let lab1 = []
          for (let item of resObj.luban) {
            let obj = {"name":item.CLASSIFY, "value":item.NUM};
            let labText = item.CLASSIFY
            newData1.push(obj);
            lab1.push(labText)
          }
        this.lubanCof.data = newData1;
        this.labelConfig.data = lab1;

        //
        let newData2 = [];
        for(let item of resObj.guojia) {
          let obj = {"name":item.CLASSIFY, "value":item.NUM};
          newData2.push(obj);
        }
        this.guojiaCof.data = newData2;
        //
        let newData3 = [];
        for(let item of resObj.zhongjiao) {
          let obj = {"name":item.CLASSIFY, "value":item.NUM};
          newData3.push(obj);
        }
        this.zhongjiaoCof.data = newData3;


        this.labelConfig = { ...this.labelConfig }
        this.lubanCof.data = { ...this.lubanCof.data };
        this.guojiaCof.data = { ...this.guojiaCof.data };
        this.zhongjiaoCof.data = { ...this.zhongjiaoCof.data}
        this.objData = { ...this.objData };
      });
    }
  }
};
</script>


<style scoped lang="less">
.itemContent {
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.itemCard {
  width: 100%;
  height: 69%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .cardMain {
    height: 33%;
  }
  .chartTitle {
    position: absolute;
    left: 2%;
    color: #f3fd4f;
  }
  .item {
    display: flex;
    justify-content: space-around;
    height: 93%;
    padding-top: 10px;
    .pieChart {
      width: 51%;
      box-sizing: border-box;
      display: flex;
      justify-content: space-around;
    }
    .statistics {
      width: 45%;
      display: flex;
      justify-content: space-around;
      .statisticsItem {
        margin-top: 15%;
        width: 27%;
        height: 50%;
        border: 1px solid #fff;
        text-align: center;
        vertical-align: middle;
        box-shadow: 0px 1px 23px 0px rgba(68, 196, 215, 1);
        border-radius: 2px;
        opacity: 0.9;
        border: 1px solid rgba(68, 196, 215, 1);

        .num {
          font-weight: 400;
          color: rgba(254, 255, 0, 1);
        }
        .text {
          font-weight: 400;
          color: rgba(158, 202, 255, 1);
        }
      }
    }
  }
}
.cc-header {
  height: 30px;
  text-align: center;
  font-size: 20px;
}
.itemList {
  width: 100%;
  display: flex;
  height: 24%;
  justify-content: space-between;
}
.proj-tab {
  box-sizing: border-box;
  height: 100%;
  overflow: hidden;
}
.titleStyle {
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
.dv-charts-container {
  height: calc(~"100% + 40px");
}
</style>
