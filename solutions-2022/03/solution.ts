import { readFileSync } from 'fs'

// https://adventofcode.com/2022/day/3
// https://adventofcode.com/2022/day/3/input

const testData = [
  'vJrwpWtwJgWrhcsFMMfFFhFp',
  'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
  'PmmdzqPrVvPwwTWBwg',
  'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
  'ttgJtRGJQctTZtZT',
  'CrZsJsPPZsGzwwsLwLmpwMDw',
]

export const rucksackReorganization = () => {
  const data = readFileSync(`${__dirname}/data.txt`, 'utf8').split('\n')
  const alpha = '_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(
    '',
  )

  let shared = []
  let sum = 0

  for (const item of data) {
    const one = item.slice(0, item.length / 2).split('')
    const two = item.slice(item.length / 2).split('')

    for (let i = 0; i < one.length; i++) {
      if (two.includes(one[i])) {
        shared.push(one[i])
        break
      }
    }
  }
  console.log(shared)

  for (const letter of shared) {
    const number = alpha.indexOf(letter)
    sum += number
  }

  console.log(sum)
}
