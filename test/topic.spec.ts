import { describe, expect, it } from 'vitest'
import { topics } from '~/composables/topics'
import { generateRegExp } from '~/composables/regexp'

describe('generateRegExp', () => {
  for (const topic of topics) {
    const reg = generateRegExp(topic.answerStr)
    expect(reg).toBeTruthy()

    it.each(topic.testCase.map(i => [i]))('%s', (c) => {
      expect((reg as RegExp).test(c)).toBe(true)
    })
  }
})
