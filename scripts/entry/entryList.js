import {useEntry, getEntries, deleteEntry} from "./entryDataProvider.js"
import {EntryHTMLConverter} from "./entry.js"

const eventHub = document.querySelector(".content")

eventHub.addEventListener("entryStateChanged", () => {
  entryList()
})

export const entryList = () => {
    getEntries().then(
      () => {
        const contentElement = document.querySelector(".entries")
        const allTheEntries = useEntry()
        let entryHTML = ""
        for (const entryObject of allTheEntries) {
          entryHTML += EntryHTMLConverter(entryObject)
        // Add to the existing HTML in the content element
        
      }
      contentElement.innerHTML = entryHTML
      }
    )
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
