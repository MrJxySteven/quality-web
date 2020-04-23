<template>
  <div id="data-view">
    <dv-full-screen-container>

      <top-header />

      <div class="main-content">
        <div class="content-left">
           <proj-map />
           <proj-tab />
           <proj-line-chart/>
           
        </div>
        <div class="content-right">
          <item-card />
        </div>

        <!-- <digital-flop /> -->

        <!-- <div class="block-left-right-content"> -->
          <!-- <ranking-board /> -->

          <!-- <div class="block-top-bottom-content">
            <div class="block-top-content">
              <rose-chart />

              <water-level-chart />

              <scroll-board />
            </div>

            <cards />
          </div> -->
        <!-- </div> -->
      </div>
    </dv-full-screen-container>
  </div>
</template>

<script>
import topHeader from './topHeader'
import digitalFlop from './digitalFlop'
import rankingBoard from './rankingBoard'
import roseChart from './roseChart'
import waterLevelChart from './waterLevelChart'
import scrollBoard from './scrollBoard'
import cards from './cards'

import projMap from './components/projMap'
import projTab from './components/projTab'
import projLineChart from './components/projLineChart'
import itemCard from './components/itemCard'

export default {
  name: 'DataView',
  components: {
    topHeader,
    digitalFlop,
    rankingBoard,
    roseChart,
    waterLevelChart,
    scrollBoard,
    cards,
    projMap,
    projTab,
    projLineChart,
    itemCard
  },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="less">
#data-view {
  width: 100%;
  height: 100%;
  // background-color: #030409;
  color: #fff;

  #dv-full-screen-container {
    background-image: url('./img/bj.png');
    background-size: 100% 100%;
    box-shadow: 0 0 3px blue;
    display: flex;
    flex-direction: column;
  }

  .main-content {
    flex: 1;
    display: flex;
    justify-content:space-around;
//     background:rgba(6,97,255,1);
// opacity:0.2859;
  }

  .content-left {
    width:62%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  .content-right {
    width:35%;
    display: flex;
    flex-direction: column;
  }
  .block-left-right-content {
    flex: 1;
    display: flex;
    margin-top: 20px;
  }

  .block-top-bottom-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding-left: 20px;
  }

  .block-top-content {
    height: 55%;
    display: flex;
    flex-grow: 0;
    box-sizing: border-box;
    padding-bottom: 20px;
  }
}
</style>
