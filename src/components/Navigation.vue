<script setup lang="ts">
import { topicCount } from '~/composables/topics'

const props = defineProps<{
  curTopicIdx: number
}>()

const emits = defineEmits<{
  (e: 'changeTopic', index: number): void
}>()
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
      @click="emits('changeTopic',props.curTopicIdx - 1)"
    />
    <div>{{ props.curTopicIdx }} / {{ topicCount }}</div>
    <div
      ml-3
      text="m gray-500/50 hove:gray-500 dark:gray-100/50 dark:hover:gray-100"
      i-carbon-chevron-right
      @click="emits('changeTopic',props.curTopicIdx + 1)"
    />
  </div>
</template>

<style scope></style>
