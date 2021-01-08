import { moodFilter } from "./MoodFilter.js"
import {useMood, getMoods} from "../mood/moodDataProvider.js"

/*
 You need to make a new HTML element with a class of
 `filters` in index.html
*/
const contentTarget = document.querySelector(".filters")

export const filterBar = () => {
    getMoods()
    .then(() => {
        let allMoods = useMood()
        let render = () => {
            contentTarget.innerHTML = `
                ${moodFilter(allMoods)}
            `
        }
        render()
    })
}

