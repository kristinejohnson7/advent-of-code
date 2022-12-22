import { readFileSync } from 'fs'

// https://adventofcode.com/2022/day/4
// https://adventofcode.com/2022/day/4/input

const testData = [
  '2-4,6-8',
  '2-3,4-5',
  '5-7,7-9',
  '2-8,3-7',
  '6-6,4-6',
  '2-6,4-8',
]

export const campCleanup = () => {
  const data = readFileSync(`${__dirname}/data.txt`, 'utf8').split('\n')
  const items = data.map(item => item.split(','))
  let sum = 0

  for (let i = 0; i < items.length; i++) {
    const itemOne = items[i][0].split('-')
    const itemTwo = items[i][1].split('-')

    const startOne = parseInt(itemOne[0])
    const endOne = parseInt(itemOne[1])
    const startTwo = parseInt(itemTwo[0])
    const endTwo = parseInt(itemTwo[1])

    if (
      (startOne <= startTwo && endOne >= endTwo) ||
      (startOne >= startTwo && endOne <= endTwo)
    ) {
      sum += 1
    }
  }
  console.log(sum)
}
