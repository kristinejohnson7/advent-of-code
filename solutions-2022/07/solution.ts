import { readFileSync } from 'fs'

// https://adventofcode.com/2022/day/7
// https://adventofcode.com/2022/day/7/input

const testData = [
  '$ system-update --please --pretty-please-with-sugar-on-top',
  'Error: No space left on device',
]

export const noSpaceLeftOnDevice = () => {
  const data = readFileSync(`${__dirname}/data.txt`, 'utf8').split('\n')
  console.log(testData)
  return 0
}

// total size of directory = sizes of files (direct or indirect)

//TO DO:
//find dirs <= 100000
//sum of total size of those directories 