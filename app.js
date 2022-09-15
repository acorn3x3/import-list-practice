

// import functions and grab DOM elements

// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state


import { champions } from './champions-data.js';
import { renderChampion } from './render-champions.js';

const championList = document.getElementById('champion-list');

function displayChampions() {
    championList.innerHtml = '';

    for (let champion of champions) {
        const championEl = renderChampion(champion);
        championList.append(championEl);

    }
}
displayChampions();
