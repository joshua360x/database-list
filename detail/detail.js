import { getRideshare } from '../fetch-utils.js';
import { renderRideShareDetail } from '../render-utils.js';



const rideshareAPPEL = document.querySelector('.rideshare-details');



window.addEventListener('load', async() => {
    const parameters = new URLSearchParams(window.location.search);
  // use the id to fetch the rideshare
    const id = parameters.get('id');
    const rideshare = await getRideshare(id);
    // console.log('🚀 ~ file: detail.js ~ line 15 ~ window.addEventListener ~ rideshare', rideshare);

    let rideShareDetailPage = renderRideShareDetail(rideshare);
    // console.log('🚀 ~ file: detail.js ~ line 15 ~ window.addEventListener ~ dogDetailPage', dogDetailPage);
  
  // render and append this dog's details to the container
    rideshareAPPEL.append(rideShareDetailPage);
});


