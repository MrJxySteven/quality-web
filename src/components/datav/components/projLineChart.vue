<template>
  <div class="projLineChart">
    <dv-border-box-7 class="proj-line">
      <div class="cc-header">
        <div class="titleStyle">各单位项目申报统计</div>
      </div>
      <dv-charts :option="option" />
    </dv-border-box-7>
  </div>
</template>

<script>
import { getOrganExce } from "@/api/interface"

export default {
  name: "lineChart",
  components: {
    //  dvFlylineChartEnhanced
  },

  data() {
    return {
      option: {},
      dataProj:[]
    };
  },
  mounted() {
    // this.getOrganExce();
    this.createData();
    
    
  },
  methods: {
    // getOrganExce(){
    //     let param = {oid:'104396',grule:'-104396-'}
    //     getOrganExce(param).then(res => {
    //       this.dataProj = res.data
          
    //       this.dataProj = {...this.dataProj}
    //       this.createData()
    //     })
    //   },
    createData() {
      console.log(` this.dataProj==`, this.dataProj)

      
      this.option = {
        // title: {
        //   text: "各单位项目申报统计",
        //   style: {
        //     fill: "#2b5386",
        //     fontSize: 17,
        //     textAlign: "center",
        //     textBaseline: "bottom"
        //   }
        // },
        legend: {
          top: "10%",
          right: "5%",
          textStyle: {
            fontSize: 14,
            fill: "#98C7FF"
          },
          data: [
            {
              name: "鲁班",
              color: "#68dfe3"
            },
            {
              name: "中交优",
              color: "#1f9efd"
            },
            {
              name: "国优",
              color: "#f6b734"
            }
          ]
        },
        grid:{
            left:50,
            top:30,
            right:30,
            bottom:40

        },
        xAxis: {
          data: [
            "一航局",
            "二航局",
            "三航局",
            "四航局",
            "中交疏浚",
            "一公局集团",
            "二公局",
            "中交路建"
          ],
          axisLabel: {
            style: {
              fill: "#fff",
              fontSize: 15,
              rotate: 0
            }
          }
        },
        yAxis: {
          name: "(项目数)",
          nameTextStyle: {
            fill: "#fff",
            fontSize: 14
          },
          data: "value",
          min: 0,
          axisLabel: {
            style: {
              fill: "#fff",
              fontSize: 13,
              rotate: 0
            }
          }
        },
        series: [
          {
            name: "鲁班",
            data: [13, 9, 1, 5, 5, 24, 13, 14],
            type: "bar",
            label: {
              show: true,
              position: "center",
              offset: [0, 0],
              style: {
                fill: "#FFF"
              }
            },
            barStyle: {
              fill: "#68dfe3"
            },
            barWidth: 20
          },
          {
            name: "国优",
            data: [46, 23, 2, 14, 13, 27, 20, 15],
            type: "bar",
            label: {
              show: true,
              position: "center",
              offset: [0, 0],
              style: {
                fill: "#FFF"
              }
            },
            barStyle: {
              fill: "#1f9efd"
            },
            barWidth: 20
          },
          {
            name: "中交优",
            data: [100, 49, 13, 72, 104, 58, 54, 62],
            type: "bar",
            label: {
              show: true,
              position: "center",
              offset: [0, 0],
              style: {
                fill: "#FFF"
              }
            },
            barStyle: {
              fill: "#f6b734"
            },
            barWidth: 20
          }
        ]
      };
    },
    mounted(){

    },
  }
};
</script>

<style scoped lang="less">
.projLineChart {
  width: 100%;
  height: 23.5%;
  // flex: 1;
  // justify-content: space-between;
  margin-top: 1%;
  box-sizing: border-box;
  overflow: hidden;
}
.cc-header {
    height: 25px;
    text-align: center;
    // font-size: 20px;
  }
.titleStyle {
  color: #f3fd4f;
  line-height: 25px;
}

.dv-charts-container {
  height: calc(~"100% - 0px");
}
</style>
