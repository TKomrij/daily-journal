import {useEntry, getEntries, deleteEntry} from "./entryDataProvider.js"
import {useMood} from "../mood/moodDataProvider.js"
import {EntryHTMLConverter} from "./entry.js"

const contentTarget = document.querySelector(".entries")
const eventHub = document.querySelector(".content")

eventHub.addEventListener("entryStateChanged", () => {
  entryList()
})


const render = (entryArray, moods) => {
  const allEntriesConvertedToStrings = entryArray.map(
      // convert the notes objects to HTML with NoteHTMLConverter
      (entry) => {

          // find the associated criminal for the note
          const associatedMood = moods.find(
              (mood) => {
                  return mood.id === entry.moodId
              }
          )
          
          entry.moodId = associatedMood.label

          return EntryHTMLConverter(entry)
      }).join("")

  contentTarget.innerHTML = allEntriesConvertedToStrings
}

export const entryList = () => {
  let moods = useMood()
  getEntries()
      .then(() => {
          const allEntries = useEntry()
          render(allEntries, moods)
      })
}


eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id.startsWith("deleteEntry--")) {
      const [prefix, entryId] = clickEvent.target.id.split("--")

      /*
          Invoke the function that performs the delete operation.

          Once the operation is complete you should THEN invoke
          useNotes() and render the note list again.
      */
     deleteEntry(entryId)
  }
})
