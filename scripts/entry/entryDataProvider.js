const entryCollection = [
  {
    id: 1,
    date: "07/24/2025",
    concept: "HTML & CSS",
    content: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
    mood: "Ok",
    editButton: "Edit",
    deleteButton: "Delete"
  },

  {
    id: 2,
    date: "07/25/2025",
    concept: "Javascript & CSS",
    content: "We talked about how to link up our main.js and our main.css to our html.",
    mood: "good",
    editButton: "Edit",
    deleteButton: "Delete"
  },

  {
    id: 3,
    date: "07/26/2025",
    concept: "Javascript",
    content: "We talked about debugging.",
    mood: "thrilled",
    editButton: "Edit",
    deleteButton: "Delete"
  }
]

export const useEntry = () => {
  const sortedByDate = entryCollection.sort(
    (currentEntry, nextEntry) =>
        Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
)
return sortedByDate
}
