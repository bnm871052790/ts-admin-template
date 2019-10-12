<template>
  <div class="app-sidebar">
    <el-scrollbar class="scrollbar-wrapper">
      <el-menu
        class="el-menu-vertical"
        mode="vertical"
        router
        :collapse="isCollapse"
        :background-color="colorData.menuBg"
        :text-color="colorData.menuText"
        :active-text-color="colorData.menuActiveText"
        :unique-opened="true"
        :collapse-transition="false"
      >
        <NavMenuItem :menus="getRouterMenu" :parentPath="''" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { menuRouter } from '@/router/router'
import NavMenuItem from './NavMenuItem.vue'
// TODO:
// @ts-ignore
import colorData from '@/assets/sass/admin-color.scss'
@Component({
  components: {
    NavMenuItem
  }
})
export default class Sidebar extends Vue {
  isCollapse: boolean = true
  get colorData(): any {
    return colorData
  }
  get getRouterMenu(): any[] {
    return menuRouter
  }
}
</script>

<style lang="scss" scoped>
$sidebar: calc(100vh - 60px);
.app-sidebar {
  height: $sidebar;
  width: 210px;
  background-color: $_menu_bg;
  transition: all 0.28s;
}
.scrollbar-wrapper {
  height: $sidebar;
  overflow: hidden;
}
::v-deep .el-scrollbar__wrap {
  overflow-x: hidden;
}
::v-deep .el-menu {
  border-right: none;
}
</style>
