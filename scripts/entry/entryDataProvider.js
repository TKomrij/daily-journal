
let entries = []

export const useEntry = () => {
    return entries.slice()
}

export const getEntries = () => {
  return fetch("http://localhost:8088/entries") // Fetch from the API
      .then(response => response.json())  // Parse as JSON
      .then(parsedEntries => { console.table(parsedEntries)
        entries = parsedEntries
          // What should happen when we finally have the array?
      })
}

const dispatchStateChangeEvent = () => {
  eventHub.dispatchEvent(new CustomEvent("journalStateChanged"))
}

export const saveJournalEntry = newJournalEntry => {
  fetch("http://localhost:8088/entries", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(newJournalEntry)
  })
    .then(getEntries)  // <-- Get all journal entries
    .then(dispatchStateChangeEvent)  // <-- Broadcast the state change event

}

