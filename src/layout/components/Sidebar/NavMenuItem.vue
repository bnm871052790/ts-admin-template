<template>
  <div>
    <template v-for="item in menus">
      <el-menu-item v-if="!item.children" :index="item.name" :route="item.path" :key="item.name">
        <i class="el-icon-location"></i>
        <span>{{ item.meta.title }}</span>
      </el-menu-item>
      <el-submenu v-else :index="item.name" popper-append-to-body :key="item.name">
        <template slot="title">{{ item.meta.title }}</template>
        <NavMenuItem :menus="item.children" />
      </el-submenu>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component
export default class NavMenuItem extends Vue {
  @Prop()
  menus!: any[]
  created() {
    console.log(this.menus)
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/admin-color.scss';
::v-deep .el-menu--inline {
  background-color: #1f2d3d !important;
  .el-menu-item {
    background-color: #1f2d3d !important;
    &:hover {
      background-color: rgb(0, 21, 40) !important;
    }
  }
  .el-submenu__title {
    background-color: #1f2d3d !important;
    &:hover {
      background-color: rgb(0, 21, 40) !important;
    }
  }
}
</style>
