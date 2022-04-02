import { computed, ref } from 'vue'
import type { ToastOptions } from './toastHandler'

interface Topic {
  id: number
  description: string
  testCase: string[]
  answer: RegExp
  solveTips: ToastOptions
}

export const topics: Topic[] = [
  {
    id: 1,
    description: 'Hello, welcome to start-regexp! This is a first regexp test that need your regexp answer to match "HelloWorld". Let\'s start!',
    testCase: ['HelloWorld'],
    answer: /HelloWorld/g,
    solveTips: {
      title: 'Tips',
      content: '/HelloWorld/g',
      buttonText: 'Close',
    },
  },
]

export const curTopicIdx = ref(1)

export const curTopic = computed<Topic>(() => topics[curTopicIdx.value - 1])

export const topicCount = topics.length

export const changeTopic = (topic: number) => {
  if (topic > topicCount)
    curTopicIdx.value = topicCount
  else if (topic < 1)
    curTopicIdx.value = 1
  else
    curTopicIdx.value = topic
}
