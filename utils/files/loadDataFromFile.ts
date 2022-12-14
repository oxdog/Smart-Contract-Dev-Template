import * as fs from 'fs'
import path from 'path'

export const loadDataFromFile = (filename: string) => {
  const rawData = fs.readFileSync(
    path.join(__dirname, `../../data/${filename}`)
  )

  return JSON.parse(rawData.toString())
}
