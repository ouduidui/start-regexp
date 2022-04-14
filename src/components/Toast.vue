<script setup lang="ts">
import { hideToast, toastInfo } from '~/composables/toastHandler'
</script>

<template>
  <Mask>
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
  </Mask>
</template>

<style scope></style>
