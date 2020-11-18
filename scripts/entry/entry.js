export const Entry = (entry) => {
  return `
  <li class="entry">
    <h2 class="entry__title">Entry ${entry.id}</h2>
    <p>Date: ${entry.date}</p>
    <p>Concepts: ${entry.concept}</p>
    <p class="entry__content">Entry: ${entry.content}</p>
    <p>Mood: ${entry.mood}</p>
    <button class="entry__edit">${entry.editButton}</button>
    <button class="entry__delete">${entry.deleteButton}</button>
  </li>
  `
}