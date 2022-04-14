<script setup lang="ts">
import { hideToast, toastInfo } from '~/composables/toastHandler'
</script>

<template>
  <Mask>
    <p font-mono text="4xl center gray-500 dark:gray-100">
      {{ toastInfo.title }}
    </p>
    <p font-mono text="xl center gray-500 dark:gray-100" pt-5>
      {{ toastInfo.content }}
    </p>
    <button
      font-mono
      opacity="80 hover:100"
      text="xl center gray-500 dark:gray-100"
      border="2 gray-500 dark:gray-100"
      p="x-8 y-1"
      mt-8
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
