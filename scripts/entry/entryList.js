import {useEntry} from "./entryDataProvider.js"
import {Entry} from "./entry.js"

export const entryList = () => {
  const contentElement = document.querySelector(".entries")
  const allTheEntries = useEntry()

  for (const entryObject of allTheEntries) {
    const entryHTML = Entry(entryObject)
    contentElement.innerHTML += entryHTML
  }
}