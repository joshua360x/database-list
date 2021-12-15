// should be used to render the DOM


export function renderRideShareCard(data) {
    const div = document.createElement('div');
    // const img = document.createElement('img');
    const h1 = document.createElement('h1');
    const h3 = document.createElement('h3');
    const aTag = document.createElement('a');


    div.classList.add('rideshare-item');


    h1.textContent = data.BRAND;
    h3.textContent = 'See More';
    aTag.href = `./detail/?id=${data.id}`;
    // img.src = data.src;

    div.append(h1, h3);
    aTag.append(div);

    return aTag;

}


export function renderRideShareDetail(data) {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');


    div.classList.add('rideshare-item-specific');


    h1.textContent = data.BRAND;
    p.textContent = data.description;
    img.src = data.src;
    div.append(h1, img, p);

    return div;
}



