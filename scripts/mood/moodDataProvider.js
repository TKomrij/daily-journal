let moods = []

export const useMood = () => {
  return moods.slice()
}

export const getMoods = () => {
  return fetch("http://localhost:8088/moods")
  .then(response => response.json())
  .then(parsedMoods => {
    moods = parsedMoods
  })
}