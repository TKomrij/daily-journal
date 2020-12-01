
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

// export const useEntry = () => {
//   const sortedByDate = entryCollection.sort(
//     (currentEntry, nextEntry) =>
//         Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
// )
// return sortedByDate
// }
