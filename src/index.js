import './stylesheet.css';

const DG = require('2gis-maps');

const mapParams = {
    center: [55.810509, 37.636817],
    zoom: 13
};

const map = DG.map('map', mapParams);

sendRequest();

function generatePins(obj) {
    console.log(obj.result.items.length);
    obj.result.items.forEach((item) => {
        const pos = [item.lat, item.lon];
        const pin = DG.marker(pos);
        pin.addTo(map);
    });
}

function sendRequest() {
    const myHeaders = new Headers();

    const myInit = {
        method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default'
    };

    let url = new URL('http://catalog.api.2gis.ru/2.0/catalog/marker/search');

    url.searchParams.set('q', 'Магазины');
    url.searchParams.set('page_size', '1000');
    url.searchParams.set('region_id', '32');
    url.searchParams.set('key', 'ruhebf8058');

    console.log(url);

    const myRequest = new Request(url, myInit);
    fetch(myRequest)
        .then((response) => (response.text()))
        .then((text) => (JSON.parse(text)))
        .then((obj) => (generatePins(obj)));
}
