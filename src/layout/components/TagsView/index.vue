<template>
  <div id="tags-view-container" class="tags-view-container">
    <scroll-pane ref="scrollPane" class="tags-view-wrapper">
      <router-link
        v-for="(tag, index) in visitedViews"
        ref="tag"
        :key="tag.path"
        :class="isActive(tag) ? 'active' : ''"
        :to="{ path: tag.recordPath }"
        tag="span"
        class="tags-view-item"
      >
        {{ tag.meta.title }}
        <span v-if="index !== 0" class="el-icon-close" @click.prevent.stop="remove(tag, index)"></span>
      </router-link>
    </scroll-pane>
  </div>
</template>

<script lang="ts">
import ScrollPane from './ScrollPane.vue'
import { Component, Vue, Watch } from 'vue-property-decorator'
import { Route } from 'vue-router'
import { Mutation } from 'vuex-class'
import { State } from '@/store/modules/tagsView'
@Component({
  components: {
    ScrollPane
  }
})
export default class TagsView extends Vue {
  @Mutation('SET_INCLUDE') setInclude!: (params: any[]) => void
  @Mutation('DEL_INCLUDE') delInclude!: (params: State['include']) => void
  visitedViews: any[] = [
    {
      recordPath: '/root',
      name: 'Root',
      meta: {
        title: '首页'
      }
    }
  ]
  @Watch('$route')
  routerChange(val: Route) {
    this.pushRoute()
  }
  created() {
    this.pushRoute()
  }
  /**
   * 移除
   */
  remove(route: any, index: number) {
    const name: any = route.name
    this.visitedViews.splice(index, 1)
    // 删除缓存
    this.delInclude(name)
    if (this.isActive(route)) {
      ;(this.$refs as any).tag[index - 1].$el.click()
    }
  }
  /**
   * 新增
   */
  pushRoute() {
    if (this.isRepeat(this.$route)) return
    const ops: any = Object.assign({}, this.$route)
    ops.recordPath = ops.path
    this.visitedViews.push(ops)
    // 保存缓存
    this.setInclude(this.visitedViews)
  }
  /**
   * 是否重复
   */
  isRepeat(route: Route) {
    for (let i = 0; i < this.visitedViews.length; i++) {
      if (this.visitedViews[i].meta.title === route.meta.title) {
        this.$set(this.visitedViews[i], 'recordPath', route.path)
        return true
      }
    }
    return false
  }
  /**
   * 是否当前选中
   */
  isActive(route: any) {
    return route.recordPath === this.$route.path
  }
}
</script>
<style lang="scss" scoped>
.tags-view-container {
  height: $_tags_view_heigth;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
  .tags-view-wrapper {
    .tags-view-item {
      display: inline-block;
      position: relative;
      cursor: pointer;
      height: 26px;
      line-height: 26px;
      border: 1px solid #d8dce5;
      color: #495060;
      background: #fff;
      padding: 0 8px;
      font-size: 12px;
      margin-left: 5px;
      margin-top: 4px;
      &:first-of-type {
        margin-left: 15px;
      }
      &:last-of-type {
        margin-right: 15px;
      }
      &.active {
        background-color: $_tags_view_active_color;
        color: #fff;
        border-color: $_tags_view_active_color;
        &::before {
          content: '';
          background: #fff;
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          position: relative;
          margin-right: 2px;
        }
      }
    }
  }
  .contextmenu {
    margin: 0;
    background: #fff;
    z-index: 3000;
    position: absolute;
    list-style-type: none;
    padding: 5px 0;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 400;
    color: #333;
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);
    li {
      margin: 0;
      padding: 7px 16px;
      cursor: pointer;
      &:hover {
        background: #eee;
      }
    }
  }
}
</style>

<style lang="scss">
//reset element css of el-icon-close
.tags-view-wrapper {
  .tags-view-item {
    .el-icon-close {
      width: 16px;
      height: 16px;
      vertical-align: 2px;
      border-radius: 50%;
      text-align: center;
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      transform-origin: 100% 50%;
      &:before {
        transform: scale(0.6);
        display: inline-block;
        vertical-align: -3px;
      }
      &:hover {
        background-color: #b4bccc;
        color: #fff;
      }
    }
  }
}
</style>
