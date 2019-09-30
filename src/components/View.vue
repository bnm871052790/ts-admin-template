<template>
  <div class="view">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class View extends Vue {}
</script>

<style lang="scss" scoped>

</style>
