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

const dispatchMoodStateChangeEvent = () => {
  const eventHub = document.querySelector(".content")
  const moodStateChangedEvent = new CustomEvent("moodStateChanged")

  eventHub.dispatchEvent(moodStateChangedEvent)
}

