export const generateRegExp = (val: string): RegExp | false => {
  try {
    return new RegExp(val)
  }
  catch (e) {
    return false
  }
}

export const generateIsCheckArray = (regStr: string, testCase: string[]): boolean[] => {
  const reg: RegExp | false = generateRegExp(regStr)
  if (regStr !== '' && reg) {
    return testCase.map((str) => {
      const res = str.match(reg)
      if (res === null) return false
      return res[0] === str
    })
  }
  else { return Array(testCase.length).fill(false) }
}
