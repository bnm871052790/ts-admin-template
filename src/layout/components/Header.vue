<template>
  <el-header class="app-header">
    <img src="@/assets/img/logo.png" class="logo" />
    <el-dropdown trigger="click">
      <span class="el-dropdown-link">用户名<i class="el-icon-arrow-down el-icon--right"/></span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
        <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
        <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
        <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
        <el-dropdown-item icon="el-icon-circle-check">蚵仔煎</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class Header extends Vue {
  pagename: boolean = false
}
</script>

<style lang="scss" scoped>
.app-header {
  display: flex;
  height: $_header_height !important;
  justify-content: space-between;
  align-items: center;
  background-color: $_header_color;
  .logo {
    width: 40px;
  }
  .el-dropdown-link {
    color: #fff;
    cursor: pointer;
  }
}
</style>
