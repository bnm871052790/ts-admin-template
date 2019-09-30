<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class AppMain extends Vue {}
</script>

<style lang="scss" scoped>
.app-main {
  flex: 1;
  height: calc(100vh - 60px);
  overflow: hidden;
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
