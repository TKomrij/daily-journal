const eventHub = document.querySelector(".content");
const targetListContainer = document.querySelector(".mood_filter");

export const moodFilter = (allMoods) => {
  return `
      <fieldset class="fieldset">
          <legend>Filter Journal Entries by Mood</legend>
          ${
              allMoods.map(
                  (mood) => {
                      return `<input id="moodFilter--${mood.id}" type="radio" name="moodFilter" value="${ mood.id }"/>
                      <label for="moodFilter--${mood.id}">${ mood.label }</label>
                      `
                  }
              ).join("")
          }
      </fieldset>
      `
}


targetListContainer.addEventListener("change", e => {
    if (e.target.id.startsWith("moodFilter--")) {
        const [prefix, chosenMoodId] = e.target.id.split("--");
        const findMatchingEntries = new CustomEvent("moodButtonClicked", {
            detail: {
                mood: chosenMoodId
            }
        });
        eventHub.dispatchEvent(findMatchingEntries);
    };
});

