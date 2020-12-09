const contentElement = document.querySelector(".form_container")

export const journalFormComponent = () => {
  return `
  <form class="form" action="#">
        <fieldset class="form__fieldset">
          <div class="form__fieldset_flex">
            <div class="form__input">
              <label for="journal_date">Date of Entry</label>
              <input class="form__fill_in form__date" type="date" name="journalDate" id="journalDate">
            </div>
            <div class="form__input">
              <label for="journal_concept">Concepts Covered</label>
              <input class="form__fill_in form__concept" type="text">
            </div>
            <div class="form__input">
              <label for="journal_entry">Journal Entry</label>
              <textarea class="form__fill_in form__entry"></textarea>
            </div>
            <div class="form__input">
              <label for="journal_mood">Mood for the Day</label>
              <select class="form__fill_in" name="moods" id="moods">
                <option value="thrilled">Thrilled</option>
                <option value="happy">Happy</option>
                <option value="indifferent">Indifferent</option>
                <option value="sad">Sad</option>
                <option value="mad">Mad</option>
              </select>
            </div>
            <div class="button_container">
                <button class="form__button" type="submit">Record Journal Entry</button>
            </div>
          </div>
          <iframe src="https://giphy.com/embed/3oz8xTUmZABI3PGwDe" height="350" style="border: 0;" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/cute-craft-hand-made-3oz8xTUmZABI3PGwDe"></a></p>
        </fieldset>
      </form>
  `
}

contentElement.innerHTML += journalFormComponent()