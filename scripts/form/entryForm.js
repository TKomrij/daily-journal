import { saveJournalEntry } from "../entry/entryDataProvider.js"

const eventHub = document.querySelector(".content")
const contentElement = document.querySelector(".form_container")

export const journalFormComponent = () => {
  return `
  <form class="form" action="#">
        <fieldset class="form__fieldset">
          <div class="form__fieldset_flex">
            <div class="form__input">
              <label for="journal_date">Date of Entry</label>
              <input class="form__fill_in form__date" type="date" name="journalDate" id="date">
            </div>
            <div class="form__input">
              <label for="journal_concept">Concepts Covered</label>
              <input class="form__fill_in form__concept" id="concept" type="text">
            </div>
            <div class="form__input">
              <label for="journal_entry">Journal Entry</label>
              <textarea class="form__fill_in form__entry" id="content"></textarea>
            </div>
            <div class="form__input">
              <label for="journal_mood">Mood for the Day</label>
              <select class="form__fill_in" name="moods" id="mood">
                <option value="thrilled">Thrilled</option>
                <option value="happy">Happy</option>
                <option value="indifferent">Indifferent</option>
                <option value="sad">Sad</option>
                <option value="mad">Mad</option>
              </select>
            </div>
            <div class="button_container">
                <button class="form__button" id="saveNotejournalStateChanged" type="submit">Record Journal Entry</button>
            </div>
          </div>
          <iframe src="https://giphy.com/embed/3oz8xTUmZABI3PGwDe" height="350" style="border: 0;" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/cute-craft-hand-made-3oz8xTUmZABI3PGwDe"></a></p>
        </fieldset>
      </form>
  `
}



eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "saveNotejournalStateChanged") {

      // need to gather the data from the form
      const date = document.querySelector("#date").value
      const concept = document.querySelector("#concept").value
      const content = document.querySelector("#content").value
      const mood = document.querySelector("#mood").value


      // Make a new object representation of a note
      const newEntry = {
          date: date,
          concept: concept,
          content: content,
          mood: mood
          // timestamp: Date.now()
      }

      // Change API state and application state
      saveJournalEntry(newEntry)
  }
})


contentElement.innerHTML += journalFormComponent()
