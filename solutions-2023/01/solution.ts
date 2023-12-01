import { readFileSync } from 'fs'

// https://adventofcode.com/2023/day/1
// https://adventofcode.com/2023/day/1/input

const testData = [
  '1abc2',
  'pqr3stu8vwx',
  'a1b2c3d4e5f',
  'treb7uchet',
]

export const trebuchet = () => {
  const data = readFileSync(`${__dirname}/data.txt`, 'utf8').split('\n')
  console.log(testData)
  return 0
}
