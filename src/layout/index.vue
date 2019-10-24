<template>
  <div class="app-wrapper">
    <app-header />
    <el-container class="container">
      <Sidebar />
      <div class="view">
        <TagsView></TagsView>
        <AppMain />
      </div>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { AppHeader, Sidebar, AppMain, TagsView } from './components'
@Component({
  components: {
    AppHeader,
    Sidebar,
    TagsView,
    AppMain
  }
})
export default class Layout extends Vue {}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  .view {
    flex: 1;
    height: calc(100vh - #{$_header_height});
  }
}
</style>
