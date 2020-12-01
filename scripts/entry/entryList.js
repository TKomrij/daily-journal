import {useEntry, getEntries} from "./entryDataProvider.js"
import {Entry} from "./entry.js"

export const entryList = () => {
    getEntries().then(
      () => {
        const contentElement = document.querySelector(".entries")
        const allTheEntries = useEntry()
        for (const entryObject of allTheEntries) {
          const entryHTML = Entry(entryObject)
        // Add to the existing HTML in the content element
        contentElement.innerHTML += entryHTML
      }
      }
    )
}