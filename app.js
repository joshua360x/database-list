// import functions and grab DOM elements

import { getRideshares } from './fetch-utils.js';
import { renderRideShareCard } from './render-utils.js';

const rideshareEl = document.querySelector('.rideshare');
// let state


window.addEventListener('load', async() => {
    const rideshares = await getRideshares();


    for (const rideshare of rideshares) {

        let rideshareApps = renderRideShareCard(rideshare);
        // console.log('🚀 ~ file: app.js ~ line 17 ~ window.addEventListener ~ rideshareApps', rideshareApps);

        rideshareEl.append(rideshareApps);

    }
});

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
