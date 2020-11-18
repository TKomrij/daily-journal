export const Entry = (entry) => {
  return `
  <li class="entry">
      <h3 class="entry__title margin_left">Entry ${entry.id}</h3>
      <p class="margin_left">Date: ${entry.date}</p>
      <p class="margin_left">Concepts: ${entry.concept}</p>
      <p class="entry__content margin_left">Entry: ${entry.content}</p>
      <p class="margin_left">Mood: ${entry.mood}</p>
      <button class="entry__edit margin_left">${entry.editButton}</button>
      <button class="entry__delete margin_left">${entry.deleteButton}</button>
  </li>
  `
}