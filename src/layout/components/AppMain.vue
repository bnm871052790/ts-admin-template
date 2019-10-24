<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <router-view />
    </transition>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class AppMain extends Vue {}
</script>

<style lang="scss" scoped>
@import '@/assets/css/animation.scss';
.app-main {
  height: calc(100vh - #{$_header_height} - #{$_tags_view_heigth} - 1px);
  padding: 14px;
  overflow: hidden;
  box-sizing: border-box;
}
// .fixed-header + .app-main {
//   padding-top: 50px;
// }

// .hasTagsView {
//   .app-main {
//     /* 84 = navbar + tags-view = 50 + 34 */
//     min-height: calc(100vh - 84px);
//   }
//   .fixed-header + .app-main {
//     padding-top: 84px;
//   }
// }
</style>
