<script setup lang="ts">
import { ref } from 'vue'
import Platform from './Platform.vue'
import type Car from './Car'

const car = ref<Car | null>(null)
</script>

<template>
  <Platform>
    <template #plane>
      <Object :item="car" />
    </template>
  </Platform>
</template>
