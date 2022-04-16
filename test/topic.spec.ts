import { describe, expect, it } from 'vitest'
import { topics } from '~/composables/topics'
import { generateRegExp } from '~/composables/regexp'

describe('generate regular expression', () => {
  for (const topic of topics) {
    const reg = generateRegExp(topic.answerStr)
    expect(reg).toBeTruthy()

    it.each(topic.testCase.map(i => [i]))('%s', (c) => {
      expect((reg as RegExp).test(c)).toBe(true)
    })
  }
})

describe('topic id type', () => {
  it('topic id should be dash nomenclature', () => {
    const reg = /^[a-z0-9_-]+/
    for (const topic of topics) {
      const match = topic.id.match(reg)
      expect(match![0]).toBe(topic.id)
    }
  })

  it('topic id should be unique', () => {
    const set = new Set<string>()
    for (const topic of topics) {
      expect(set.has(topic.id)).toBe(false)
      set.add(topic.id)
    }
  })
})
