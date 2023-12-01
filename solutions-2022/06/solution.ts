import { readFileSync } from 'fs'
const path = require('path')
const fs = require('fs')

// https://adventofcode.com/2022/day/6
// https://adventofcode.com/2022/day/6/input

const string = 'mjqjpqmgbljsphdztnvjfqwrcgsml'

export const tuningTrouble = () => {
  const string = fs
    .readFileSync(path.join(__dirname, 'data.txt'), 'utf8')
    .split('')

  let marker = []

  for (let i = 0; i < string.length; i++) {
    marker.push(string[i])

    if (marker.length === 4) {
      const unique = new Set(marker)

      if (marker.length === unique.size) {
        return i + 1
      }
      marker.shift()
    }
  }
  return 0
}
