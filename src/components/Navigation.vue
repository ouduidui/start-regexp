<script setup lang="ts">
import { changeTopic, curTopicIdx, topicCount } from '~/composables/topics'
</script>

<template>
  <div
    text="xl center gray-500 dark:gray-100"
    font="mono"
    flex
    items-center
    justify-center
    cursor-pointer
  >
    <div
      mr-3
      text="m gray-500/50 hove:gray-500 dark:gray-100/50 dark:hover:gray-100"
      i-carbon-chevron-left
      @click="changeTopic(curTopicIdx - 1)"
    />
    <div>{{ curTopicIdx }} / {{ topicCount }}</div>
    <div
      ml-3
      text="m gray-500/50 hove:gray-500 dark:gray-100/50 dark:hover:gray-100"
      i-carbon-chevron-right
      @click="changeTopic(curTopicIdx + 1)"
    />
  </div>
</template>

<style scope></style>
