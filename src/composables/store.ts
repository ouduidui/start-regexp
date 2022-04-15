import { useDebounceFn, useStorage } from '@vueuse/core'

interface HistoryItem {
  id: number
  answer: string
}

const history = useStorage<HistoryItem[]>('start-regex-history', [])

export const setHistory = useDebounceFn(
  (id: number, answer: string): void => {
    const index = history.value.findIndex(item => item.id === id)
    if (index !== -1) {
      history.value[index].answer = answer
    }
    else {
      history.value.push({
        id,
        answer,
      })
    }
  },
  250,
)

export const getHistory = (id: number): string => {
  const index = history.value.findIndex(item => item.id === id)
  if (index !== -1)
    return history.value[index].answer
  else
    return ''
}
