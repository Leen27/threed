<!--
 * @Description: 主视图
 * @Author: ZY
 * @Date: 2020-12-24 10:36:58
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-11 10:27:35
-->
<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  setup() {
    const route = useRoute()

    const key = () => {
      return route.path
    }
    return {
      key
    }
  }
})
</script>

<template>
  <section class="w-80 h-80 absolute l-0 t-0">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key" />
    </transition>
  </section>
</template>
