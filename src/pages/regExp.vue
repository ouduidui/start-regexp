<script setup lang="ts">
import type { Topic } from '~/composables/topics'
import { limitTopicIdx, topics } from '~/composables/topics'

const router = useRouter()
const routes = useRoute()
const curTopicIdx = ref(limitTopicIdx(routes.params.id ? Number(routes.params.id) : 1))

const curTopic = computed<Topic>(() => topics[curTopicIdx.value - 1])

const changeTopic = (index: number) => router.push(`/${limitTopicIdx(index)}`)
</script>

<template>
  <navigation
    :cur-topic-idx="curTopicIdx"
    @change-topic="changeTopic"
  />
  <basic
    :cur-topic="curTopic"
  />
</template>

<style scope></style>
