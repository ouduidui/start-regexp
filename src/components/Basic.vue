<script setup lang="ts">
import type { Topic } from '~/composables/topics'
import { showToast } from '~/composables/toastHandler'

const props = defineProps<{
  curTopic: Topic
}>()

const __DEV__ = import.meta.env.DEV

const regStr = ref('')

const generateRegExp = (val: string): RegExp | false => {
  try {
    const reg = new RegExp(val)
    return reg
  }
  catch (e) {
    return false
  }
}

const isCheck = computed<boolean[]>(() => {
  const reg: RegExp | false = generateRegExp(regStr.value)
  const testCase = props.curTopic.testCase
  if (regStr.value !== '' && reg)
    return testCase.map(str => reg.test(str))

  else return Array(props.curTopic.testCase.length).fill(false)
})

const openAnswer = () => {
  const solveTips = props.curTopic.solveTips
  showToast({ ...solveTips })
}
</script>

<template>
  <div
    text="xl center gray-500 dark:gray-100"
    p="x-10"
    font="mono"
  >
    <!-- Input -->
    <div pt-10 pb-5>
      /
      <input
        v-model="regStr"
        bg-transparent
        rounded-3xl
        border-1
        outline-none
        p="x-4 y-1"
        text="center"
      >
      /
    </div>

    <!-- Description -->
    <div mb-20>
      <div
        text-2xl
        pb-2
        mb-5
        border-b="1 gray-500/30 dark:gray-100/30"
      >
        Description
      </div>
      <div>
        {{ curTopic.description }}
      </div>
    </div>

    <!-- Test Case -->
    <div>
      <div
        text-2xl
        pb-2
        mb-5
        border-b="1 gray-500/30 dark:gray-100/30"
        flex
        items-end
        justify-center
      >
        <div>Test Case</div>
        <div
          flex
          items-center
          justify-center
          cursor-pointer
          text="base gray-500/50 hove:gray-500 dark:gray-100/50 dark:hover:gray-100"
          @click="openAnswer"
        >
          <div
            ml-5
            mr-1
            i-mdi-code-json
          />
          <div>ans</div>
        </div>
      </div>

      <div
        v-for="(item, idx) in curTopic.testCase" :key="idx"
        flex
        items-center
        justify-center
        pb-3
      >
        <div
          v-if="!isCheck[idx]"
          text="red-500"
          mr-5
          i-mdi-alpha-x-circle-outline
        />
        <div
          v-else
          text="green-500"
          mr-5
          i-mdi-checkbox-marked-circle-outline
        />
        <div>
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scope></style>
