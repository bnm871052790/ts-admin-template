<template>
  <el-scrollbar ref="scrollContainer" :vertical="false" class="scroll-container" @wheel.native.prevent="handleScroll">
    <slot />
  </el-scrollbar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class ScrollPane extends Vue {
  get ScrollPane() {
    return (this.$refs.scrollContainer as any).$refs.wrap
  }
  handleScroll(e: any) {
    // const eventDelta = e.wheelDelta || -e.deltaY * 40
    // const $scrollWrapper = this.scrollWrapper
    // $scrollWrapper.scrollLeft = $scrollWrapper.scrollLeft + eventDelta / 4
  }
}
</script>

<style lang="scss" scoped>
.scroll-container {
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
}
::v-deep .el-scrollbar__bar {
  bottom: 0px;
}
::v-deep .el-scrollbar__wrap {
  height: 49px !important;
}
::v-deep .el-scrollbar__view {
  text-align: left;
}
</style>
