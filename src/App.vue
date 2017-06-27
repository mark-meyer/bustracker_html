<template>
  <div id="app">
    <mainComp></mainComp>
  </div>
</template>

<script>
import Main from "@/components/Main.vue"

export default {
  name: 'app',
  components: {"mainComp": Main}
}
</script>

<style>
</style>