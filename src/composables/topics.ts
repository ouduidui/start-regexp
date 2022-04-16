import type { ToastOptions } from './toastHandler'

export interface Topic {
  id: string
  description: string
  testCase: string[]
  answer: RegExp
  answerStr: string
  solveTips: ToastOptions
}

export const topics: Topic[] = [
  {
    id: 'hello-world',
    description: 'Hello, welcome to start-regexp! This is a first regexp test that need your regexp answer to match "HelloWorld". Let\'s start!',
    testCase: ['HelloWorld'],
    answer: /HelloWorld/,
    answerStr: 'HelloWorld',
    solveTips: {
      title: 'Tips',
      content: '/HelloWorld/',
      buttonText: 'Close',
    },
  },
  {
    id: 'any-single-character',
    description: 'Use \'.\' to matches any single character except line terminators: \\n, \\r, \\u2028 or \\u2029. For example, /.y/ matches "my" and "ay", but not "yes", in "yes make my day".',
    testCase: ['ab', 'ac', 'ad', 'ae'],
    answer: /./,
    answerStr: 'a.',
    solveTips: {
      title: 'Tips',
      content: '/a./',
      buttonText: 'Close',
    },
  },
]

export const topicCount = topics.length

export const limitTopicIdx = (idx: number): number => idx > topicCount ? topicCount : idx < 1 ? 1 : idx
