<script setup lang="ts">
import { hideToast, isShowToast, toastInfo } from '~/composables/toastHandler'
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
      <p text="3xl center gray-500 dark:gray-100">
        {{ toastInfo.title }}
      </p>
      <p text="xl center gray-500 dark:gray-100" pt-3>
        {{ toastInfo.content }}
      </p>
      <button
        opacity="80 hover:100"
        text="xl center gray-500 dark:gray-100"
        border="2 gray-500 dark:gray-100"
        p="x-8 y-1"
        mt-10
        mb-10
        m-auto
        flex
        @click="hideToast"
      >
        {{ toastInfo.buttonText }}
      </button>
    </div>
  </Teleport>
</template>

<style scope></style>
