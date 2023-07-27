<script setup lang="ts">
import { ref } from 'vue'
import Platform from './Platform.vue'

class Car {}

const car = ref<Car>({})
</script>

<template>
  #321
  <Platform>
    <template #plane>
      <Object :item="car" />
    </template>
  </Platform>
</template>
