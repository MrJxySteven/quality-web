<template>
  <div id="proj-map">
    <div class="cc-header">
      <dv-decoration-1 style="width:200px;height:30px;" />
      <!-- <div class="titleStyle">项目地图</div> -->
      <dv-decoration-1 style="width:200px;height:30px;" />
    </div>
    <div class="wap">
      <div class="left">
        <div class="item">
          <p>创优项目</p>
          <p>
            <span class="num">1005</span>个
          </p>
        </div>
        <div class="item">
          <p>鲁班</p>
          <p>
            <span class="num">163</span>个
          </p>
        </div>
        <div class="item">
          <p>国优</p>
          <p>
            <span class="num">254</span>个
          </p>
        </div>
        <div class="item">
          <p>中交优</p>
          <p>
            <span class="num">807</span>个
          </p>
        </div>
      </div>
      <div class="right">
        <p>本年度新增得项目数</p>
        <p>
          鲁班奖
          <span class="num">0</span>个
          国优
          <span class="num">0</span>个
          中交优
          <span class="num">0</span>个
        </p>
      </div>
    </div>
    <!-- <dv-scroll-ranking-board :config="config" /> -->
    <!-- <dv-flyline-chart :config="config" style="width:100%;height:88%;" /> -->
    <chinaMap></chinaMap>
  </div>
</template>

<script>
var url = require("../img/cn2.jpg");
var centerPoint = require("../img/mapCenterPoint.png")
var points  = require("../img/mapPoint.png")

import chinaMap from './chinaMap'

export default {
  name: "map",
  components: {
     chinaMap
  },

  data() {
    return {
      config: {
        centerPoint: [0.67, 0.45],
        points: [
          {
            position: [0.45, 0.7],
            // text: "成兰铁路"
          },
          {
            position: [0.55, 0.8],
            // text: "云桂铁路一工区"
          },
          {
            position: [0.47, 0.81],
            // text: "永广铁路"
          },
          
          {
            position: [0.53, 0.75],
            // text: "道安高速TJ21标项目部"
          },
          {
            position: [0.52, 0.74],
            // text: "中交安江高速9B合同段"
          },
          {
            position: [0.65, 0.74],
            // text: "珠海城际轨道交通工程"
          },
          {
            position: [0.7, 0.5],
            // text: "青岛轨道交通R3线"
          },
         
          // {
          //   position: [0.72, 0.36],
          //   text: "二航局一公司预制厂"
          // },
         
          // {
          //   position: [0.71, 0.46],
          //   text: "虎门二桥项目部"
          // },
          
          // {
          //   position: [0.73, 0.48],
          //   text: "盐城快速路网Q2标"
          // }

        ],
        k: 0.5,
        bgImgUrl: url,
        centerPointImg: {
          url: centerPoint
        },
        pointsImg: {
          url: points
        }
      }
    };
  }
};
</script>

<style scoped lang="less" >
#proj-map {
  width: 100%;
  height: 45%;
  position: relative;
  box-shadow: 0 0 3px blue;
  // background-color: rgba(6, 30, 93, 0.5);
  border-top: 2px solid rgba(1, 153, 209, 0.5);
  box-sizing: border-box;
  // padding: 0px 30px;

  .cc-header {
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .titleStyle {
    font-size: 20px;
    color: #f3fd4f;
  }
  .wap {
    position: absolute;
    width: 100%;
    z-index: 1;
    height: 95px;
    background: rgba(18, 32, 78, 1);
    opacity: 0.5133;
    display: flex;
    justify-content: space-around;
    line-height: 30px;
    .left {
      width: 50%;
      display: flex;
      justify-content: space-around;
      text-align: center;
      .item {
        width: 23%;
        font-size: 1em;
        color: #a1b9f1;
        p {
          margin: 5px;
        }
        .num {
          font-size: 1.2em;
          font-weight: 600;
          color: rgba(73, 228, 255, 1);
          line-height: 10px;
        }
      }
    }
    .right {
      width: 50%;
      font-size: 1em;
      color: #a1b9f1;
      p {
        margin: 5px;
      }

      .num {
        font-size: 1.2em;
        font-weight: 600;
        color: rgba(73, 228, 255, 1);
        line-height: 10px;
      }
    }
  }

  .dv-scroll-ranking-board {
    flex: 1;
  }
}
</style>
