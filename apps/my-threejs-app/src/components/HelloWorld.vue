<script setup lang="ts">
import { ref } from 'vue'

const container = ref(null)
</script>

<template>
  <h1>my-threejs</h1>
  <div id="container" ref="container"></div>
</template>

<style scoped>
#container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: aquamarine;
}
</style>
