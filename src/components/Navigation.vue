<script setup lang="ts">
import { topics } from '~/composables/topics'

const curTopic = ref(1)
const maxTopic = topics.length
const changeTopic = (topic: number) => {
  if (topic > maxTopic)
    curTopic.value = maxTopic
  else if (topic < 1)
    curTopic.value = 1
  else
    curTopic.value = topic
}
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
      @click="changeTopic(curTopic - 1)"
    />
    <div>{{ curTopic }} / {{ maxTopic }}</div>
    <div
      ml-3
      text="m gray-500/50 hove:gray-500 dark:gray-100/50 dark:hover:gray-100"
      i-carbon-chevron-right
      @click="changeTopic(curTopic + 1)"
    />
  </div>
</template>

<style scope></style>
