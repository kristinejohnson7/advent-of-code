import { readFileSync } from 'fs'

// https://adventofcode.com/2022/day/2
// https://adventofcode.com/2022/day/2/input

const testData = ['A Y', 'B X', 'C Z']

type Player = {
  name: string
  choice: string
}

const generateGameResults = (player1: Player, player2: Player) => {
  let result = null

  const ifVal = (a: string, b: string, w: string) => {
    player1.choice === a && player2.choice === b ? (result = w) : null
  }

  ifVal('rock', 'scissors', player1.name)
  ifVal('scissors', 'paper', player1.name)
  ifVal('paper', 'rock', player1.name)
  ifVal('scissors', 'rock', player2.name)
  ifVal('paper', 'scissors', player2.name)
  ifVal('rock', 'paper', player2.name)

  if (result === 'elf') return 0
  if (result === 'player') return 6
  if (result === null) return 3
}

const elfSelection = (choice: string) => {
  return choice === 'A' ? 'rock' : choice === 'B' ? 'paper' : 'scissors'
}

const playerSelection = (choice: string) => {
  return choice === 'X' ? 'rock' : choice === 'Y' ? 'paper' : 'scissors'
}

export const rockPaperScissors = () => {
  const data = readFileSync(`${__dirname}/data.txt`, 'utf8').split('\n')
  let totalPlaySelectionScore: number = 0
  let totalGamePoints: number = 0

  for (let i = 0; i < data.length; i++) {
    let elfPlay = ''
    elfPlay = elfSelection(data[i].slice(0, 1))

    let playerPlay = ''
    playerPlay = playerSelection(data[i].substring(2))

    const elf = {
      name: 'elf',
      choice: elfPlay,
    }

    const player = {
      name: 'player',
      choice: playerPlay,
    }

    //Scoring selection
    const { choice } = player
    let playSelection: number = 0
    choice === 'rock'
      ? (playSelection = 1)
      : choice === 'paper'
      ? (playSelection = 2)
      : (playSelection = 3)

    totalPlaySelectionScore += playSelection

    //Scoring results of game
    const gameResults = generateGameResults(elf, player)
    totalGamePoints += gameResults
  }

  console.log(totalPlaySelectionScore + totalGamePoints)
}
