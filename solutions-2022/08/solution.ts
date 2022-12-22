import { readFileSync } from 'fs'

// https://adventofcode.com/2022/day/8
// https://adventofcode.com/2022/day/8/input

const testData = [
  '30373',
  '25512',
  '65332',
  '33549',
  '35390',
]

export const treetopTreeHouse = () => {
  const data = readFileSync(`${__dirname}/data.txt`, 'utf8').split('\n')
  console.log(testData)
  return 0
}
