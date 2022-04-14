export const generateRegExp = (val: string): RegExp | false => {
  try {
    const reg = new RegExp(val)
    return reg
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
