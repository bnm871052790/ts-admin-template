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
        <NavMenuItem :menus="getRouterMenu" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { menuRouter } from '@/router/router.ts'
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
  isCollapse: boolean = false
  get colorData() {
    return colorData
  }
  get getRouterMenu(): any[] {
    return menuRouter
  }
}
</script>

<style lang="scss" scoped>
.app-sidebar {
  height: calc(100vh - 60px);
  width: 210px;
  background-color: $_menu_bg;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 210px;
}
.scrollbar-wrapper {
  height: calc(100vh - 60px);
  overflow: hidden;
}
::v-deep .el-scrollbar__wrap {
  overflow-x: hidden;
}
::v-deep .el-menu {
  border-right: none;
}
</style>
