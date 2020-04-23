<template>
  <div class="label-tag">
    <template v-if="mergedConfig">
      <div class="label-item" v-for="(label, i) in mergedConfig.data" :key="label">
        <div :style="`background-color: ${mergedConfig.colors[i % mergedConfig.colors.length]};`" />
        
         {{ label }}
      </div>
    </template>
  </div>
</template>

<script>
import { deepMerge } from "@jiaminghi/charts/lib/util/index";

import { deepClone } from "@jiaminghi/c-render/lib/plugin/util";

export default {
  name: "LabelTag",
  props: {
    config: {
      type: Object,
      default: () => []
    }
  },
  data() {
    return {
      defaultConfig: {
        /**
         * @description Label data
         * @type {Array<String>}
         * @default data = []
         * @example data = ['label1', 'label2']
         */
        data: [],
        /**
         * @description Label color (Hex|Rgb|Rgba|color keywords)
         * @type {Array<String>}
         * @default colors = ['#00baff', '#3de7c9', '#fff', '#ffc530', '#469f4b']
         * @example colors = ['#666', 'rgb(0, 0, 0)', 'rgba(0, 0, 0, 1)', 'red']
         */
        colors: ["#00baff", "#3de7c9", "#fff", "#ffc530", "#469f4b"]
      },

      mergedConfig: null
    };
  },
  watch: {
    config() {
      const { mergeConfig } = this;

      mergeConfig();
    }
  },
  methods: {
    mergeConfig() {
      let { config, defaultConfig } = this;

      this.mergedConfig = deepMerge(
        deepClone(defaultConfig, true),
        config || {}
      );
    }
  },
  mounted() {
    const { mergeConfig } = this;

    mergeConfig();
  }
};
</script>

<style scoped lang="less">
.label-tag {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  .label-item {
    margin: 3px;
    font-size: 14px;
    display: flex;
    align-items: center;
    font-weight: 400;
    color: rgba(158, 202, 255, 1);
    div {
      width: 15px;
      height: 15px;
      margin-left: 5px;
    }
  }
}
</style>
