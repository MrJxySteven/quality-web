<template>
  <div ref="myEchart" :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from "echarts";
import "echarts/map/js/china.js";
// import "echarts/map/js/world.js";
import resize from "./mixins/resize";
import { mapData } from "./TempData/mapData";
import Bus from "@/utils/bus";

const animationDuration = 1500;
export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: "chart"
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "97%"
    }
  },
  data() {
    return {
      chart: null,
      mapData: mapData
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart();
    });
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$refs.myEchart);

      this.chart.setOption({
        backgroundColor: "#0b1225",
        title: {
          // text: "监控运行图",
          left: "center",
          textStyle: {
            color: "#fff"
          }
        },
        tooltip: {
          trigger: "item"
        },
        dataRange: {
          show: false,
          min: 0,
          max: 1000,
          text: ["High", "Low"],
          realtime: true,
          calculable: true,
          color: ["orangered", "yellow", "lightskyblue"]
        },
        visualMap: {
          show: true,
          min: 0,
          max: 255,
          calculable: true,
          inRange: {
            color: ["aqua", "lime", "yellow", "orange", "pink"]
          },
          textStyle: {
            color: "#12223b"
          }
        },
        geo: {
          // 这个是重点配置区
          map: "china", // 表示中国地图
          roam: false,
          layoutCenter: ["50%", "50%"],
          layoutSize: "130%",
          label: {
            normal: {
              show: false, // 是否显示对应地名
              textStyle: {
                color: "rgba(0,0,0,0.4)"
              }
            }
          },
          itemStyle: {
            normal: {
              areaColor: "#37376e", // 地图颜色 #2D62BA
              borderColor: "rgba(0, 0, 0, 0.2)"
            },
            emphasis: {
              areaColor: "#37376e",
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 20,
              borderWidth: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          }
        },
        series: [
          {
            type: "lines",
            zlevel: 2,
            effect: {
              show: true,
              period: 4,
              trailLength: 0.02,
              symbol: "arrow",
              symbolSize: 5
            },
            lineStyle: {
              normal: {
                width: 1,
                opacity: 0.6,
                curveness: 0.2
              }
            },

            // tooltip: {
            //   trigger: "item"
            // },
            data: [
              {
                fromName: "北京",
                toName: "成兰铁路",
                value: 19,
                coords: [
                  [116.404, 39.915],
                  [104.034737, 30.686899]
                ] // 前面是起始坐标，后面是到达坐标
              },
              {
                fromName: "北京",
                toName: "云桂铁路一工区",
                value: 18,
                coords: [
                  [116.404, 39.915],
                  [105.046593, 24.05903]
                ]
              },
              {
                fromName: "北京",
                toName: "永广铁路",
                value: 17,
                coords: [
                  [116.404, 39.915],
                  [101.849019, 25.744251]
                ]
              },
              {
                fromName: "北京",
                toName: "五分公司新建西安至成都铁路XCZQ-2标段",
                value: 16,
                coords: [
                  [116.404, 39.915],
                  [108.944934, 34.382285]
                ]
              },
              {
                fromName: "北京",
                toName: "五分公司武深高速公路嘉通段TJ-4标",
                value: 15,
                coords: [
                  [116.404, 39.915],
                  [114.005825, 30.019071]
                ]
              }
            ]
          },
          {
            name: "", // 数据来源点
            type: "effectScatter",
            coordinateSystem: "geo",
            zlevel: 2,
            rippleEffect: {
              period: 4,
              brushType: "stroke",
              scale: 4
            },
            tooltip: {
              trigger: "item"
            },
            label: {
              normal: {
                show: false, // 这里更改页面显示与隐藏文字
                position: "left",
                offset: [-5, 5],
                formatter: "{b}"
              },
              emphasis: {
                show: true
              }
            },
            hoverAnimation: true,
            symbol: "circle",
            symbolSize: 5,
            itemStyle: {
              normal: {
                show: false,
                color: "#f00"
              }
            },
            data: [
              // 到达模板做点
              {
                name: "成兰铁路",
                value: [104.034737, 30.686899],
                contentData: 8765,
                numTims: "次"
              },
              {
                name: "云桂铁路一工区",
                value: [105.046593, 24.05903],
                contentData: 7652,
                numTims: "次"
              },
              {
                name: "永广铁路",
                value: [101.849019, 25.744251],
                contentData: 3547,
                numTims: "次"
              },
              {
                name: "五分公司新建西安至成都铁路XCZQ-2标段",
                value: [108.944934, 34.382285],
                contentData: 9876,
                numTims: "次"
              },
              {
                name: "五分公司武深高速公路嘉通段TJ-4标",
                value: [114.005825, 30.019071],
                contentData: 6879,
                numTims: "次"
              }
            ]
          },
          {
            name: "质量",
            type: "scatter",
            coordinateSystem: "geo",
            zlevel: 2,
            tooltip: {
              trigger: "item"
            },
            label: {
              normal: {
                show: true,
                position: "right",
                color: "#00ffff",
                formatter: "{b}",
                textStyle: {
                  color: "#00ffff"
                }
              },
              emphasis: {
                show: true
              }
            },
            symbol: "circle",
            symbolSize: 20,
            itemStyle: {
              normal: {
                show: true,
                color: "#EE0000"
              }
            },
            data: [
              {
                name: "工程质量",
                value: [116.404, 39.915],
                contentData: 102343,
                numTims: "次"
              }
            ]
          }
        ]
      });

      // this.chart.on("click", function(params) {
      //   console.log("params===", params);
      //   Bus.$emit("send_dataSelect", params);
      //   setTimeout(() => {
      //     Bus.$emit("send_data", params.data);
      //     Bus.$emit("send_point", params.data);
      //   }, 200);
      // });
    }
  }
};
</script>
