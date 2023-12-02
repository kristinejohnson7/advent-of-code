import { readFileSync } from 'fs'

// https://adventofcode.com/2023/day/1
// https://adventofcode.com/2023/day/1/input

const testData = ['1abc2', 'pqr3stu8vwx', 'a1b2c3d4e5f', 'treb7uchet']

const testDataPt2 = [
  'two1nine',
  'eightwothree',
  'abcone2threexyz',
  'xtwone3four',
  '4nineeightseven2',
  'zoneight234',
  '7pqrstsixteen',
]

function findNumbers(str) {
  const replacementMap = {
    one: 'o1e',
    two: 't2o',
    three: 't3e',
    four: 'f4r',
    five: 'f5e',
    six: 's6x',
    seven: 's7n',
    eight: 'e8t',
    nine: 'n9e',
  }

  Object.keys(replacementMap).forEach(key => {
    str = str.replaceAll(key, replacementMap[key])
  })

  return str
}

export const trebuchet = () => {
  const data = readFileSync(`${__dirname}/data.txt`, 'utf8').split('\n')

  // Part 1
  // let filteredArr = []
  // for (const item of data) {
  //   // Remove non-numbers
  //   const number = item.replace(/\D/g, '')
  //   // Get first and last of string
  //   const twoDigitNum = number.slice(0, 1) + number.slice(-1)
  //   filteredArr.push(parseInt(twoDigitNum))
  // }
  // const sum = filteredArr.reduce((a, b) => a + b, 0)

  // console.log(sum)
  // return sum

  // Part 2
  let filteredArr = []
  for (const item of data) {
    // Replace alpha with numbers
    const modifiedString = findNumbers(item)
    // Remove non-numbers
    const number = modifiedString.replace(/\D/g, '')
    // Get first and last of string
    const twoDigitNum = number.slice(0, 1) + number.slice(-1)
    filteredArr.push(parseInt(twoDigitNum))
  }
  const sum = filteredArr.reduce((a, b) => a + b, 0)

  console.log(sum)
  return sum
}
