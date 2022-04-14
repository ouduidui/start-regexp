<script setup lang="ts">
import { isShowToast } from '~/composables/toastHandler'
</script>

<template>
  <Teleport v-if="isShowToast" to="body">
    <!-- mask -->
    <div fixed inset-0 class="bg-gray-100/90 dark:bg-gray-900/90" />

    <!-- content -->
    <div
      fixed
      p-4
      class="top-1/2 left-1/2 -translate-1/2"
    >
      <slot />
    </div>
  </Teleport>
</template>
