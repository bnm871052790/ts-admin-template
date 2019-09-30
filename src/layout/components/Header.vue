<template>
  <el-header class="app-header"> </el-header>
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
  height: 200px;
  justify-content: space-between;
  background-color: #333;
}
</style>
