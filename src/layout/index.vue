<template>
  <div class="app-wrapper">
    <app-header />
    <el-container class="container">
      <Sidebar />
      <AppMain />
    </el-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { AppHeader, Sidebar, AppMain } from './components'
@Component({
  components: {
    AppHeader,
    Sidebar,
    AppMain
  }
})
export default class Layout extends Vue {}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
}
</style>
