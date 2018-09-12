require("babel-core/register");
require("babel-polyfill");

import './stylesheet.css';
import { Header } from './header';
import { queryRequest } from './module';

const DG = require('2gis-maps');

const mapParams = {
    center: [55.810509, 37.636817],
    zoom: 13
};

let data = {};

const map = DG.map('map', mapParams);

map.zoomControl.setPosition('topright');

const searchHead = new Header(() => {
    const r = new queryRequest('пельмени');
    r.Send();
});
const widget = document.querySelector('.widget');
widget.append(searchHead.render());

async function generatePins(obj) {
    console.log(obj.result.items.length);
    obj.result.items.forEach((item) => {
        const pos = [item.lat, item.lon];
        const pin = DG.marker(pos);
        pin.addTo(map);
    });
}