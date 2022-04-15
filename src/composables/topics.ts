import type { ToastOptions } from './toastHandler'

export interface Topic {
  id: number
  description: string
  testCase: string[]
  answer: RegExp
  answerStr: string
  solveTips: ToastOptions
}

export const topics: Topic[] = [
  {
    id: 1,
    description: 'Hello, welcome to start-regexp! This is a first regexp test that need your regexp answer to match "HelloWorld". Let\'s start!',
    testCase: ['HelloWorld'],
    answer: /HelloWorld/g,
    answerStr: 'HelloWorld',
    solveTips: {
      title: 'Tips',
      content: '/HelloWorld/g',
      buttonText: 'Close',
    },
  },
  {
    id: 2,
    description: 'Use \'.\' to match any character. For example, \'.\' matches any character, \'.\' matches \'a\', \'.\' matches \'b\', \'.\' matches \'c\', etc.',
    testCase: ['a', 'B', 'c', '1', '\u2228'],
    answer: /./g,
    answerStr: '.',
    solveTips: {
      title: 'Tips',
      content: '/./g',
      buttonText: 'Close',
    },
  },
]

export const topicCount = topics.length

export const limitTopicIdx = (idx: number): number => idx > topicCount ? topicCount : idx < 1 ? 1 : idx
