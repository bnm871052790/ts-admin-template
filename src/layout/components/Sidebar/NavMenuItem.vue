<template>
  <div>
    <div v-for="item in menus" :key="item.name">
      <el-menu-item v-if="!item.children" :index="parentPath + item.path">
        <i :class="item.meta.icon" v-if="item.meta && item.meta.icon"></i>
        <span slot="title">{{ item.meta.title }}</span>
      </el-menu-item>
      <el-submenu v-else :index="item.path" popper-append-to-body>
        <template slot="title">
          <i v-if="item.meta && item.meta.icon" :class="item.meta.icon"></i>
          <span slot="title">{{ item.meta.title }}</span>
        </template>
        <NavMenuItem :menus="item.children" :parentPath="parentPath + item.path + '/'" />
      </el-submenu>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component
export default class NavMenuItem extends Vue {
  @Prop()
  menus!: any[]
  @Prop()
  parentPath!: string
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/admin-color.scss';
::v-deep .el-menu--inline {
  background-color: $_menu_sub_bg !important;
  .el-menu-item {
    background-color: $_menu_sub_bg !important;
    &:hover {
      background-color: $_menu_hover_bg !important;
    }
  }
  .el-submenu__title {
    background-color: $_menu_sub_bg !important;
    &:hover {
      background-color: $_menu_hover_bg !important;
    }
  }
}
</style>
