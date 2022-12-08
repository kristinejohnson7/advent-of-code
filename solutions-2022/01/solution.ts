import { readFileSync } from 'fs'

// https://adventofcode.com/2022/day/1
// https://adventofcode.com/2022/day/1/input

const testData = [
  '1000',
  '2000',
  '3000',
  '',
  '4000',
  '',
  '5000',
  '6000',
  '',
  '7000',
  '8000',
  '9000',
  '',
  '10000',
]

//PART ONE 
const calorieCounting = (input: string[]) => {

  const splitInput = input.map((input) => input.split(' '))

  let total = 0;
  let maxCal = 0;

  console.log(splitInput)

  for (const elf of splitInput) {
    if (elf[0] !== "") {
      total += Number(elf[0])
    } else {
      if (total > maxCal) {
        maxCal = total
      } 
        total = 0;
      
    }
 }
  console.log("max", maxCal)
}

const data = readFileSync(`${__dirname}/data.txt`, 'utf8').split('\n')

calorieCounting(testData)

//PART TWO 

const calorieCountingTopThree = (input: string[]) => {

  const splitInput = input.map((input) => input.split(' '))
  
  let elfCalories: number[] = [];
  let total = 0;

  for (let i = 0; i < splitInput.length; i++) {
    const elf = splitInput[i][0]
    if (elf !== "") {
      total += Number(elf)
    } 
    if (elf === "" || splitInput.length - 1 === i) {
      elfCalories.push(total)
      total = 0;
    }
  }

  elfCalories.sort((a:number, b:number) => b - a)
  const topThreeElves = elfCalories[0] + elfCalories[1] + elfCalories[2]
  console.log("top three", topThreeElves)
}

calorieCountingTopThree(data)