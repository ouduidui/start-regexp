export const generateRegExp = (val: string): RegExp | false => {
  try {
    return new RegExp(val)
  }
  catch (e) {
    return false
  }
}

export const generateIsCheckArray = (regStr: string, testCase: string[]) => {
  const reg: RegExp | false = generateRegExp(regStr)
  if (regStr !== '' && reg)
    return testCase.map(str => reg.test(str))
  else return Array(testCase.length).fill(false)
}
