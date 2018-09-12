import { generatePins } from './pins';

export class queryRequest {
    constructor(q = 'Магазины', pageSize = '1000', regionId = '32', key = 'ruhebf8058') {
        this.q = q;
        this.pageSize = pageSize;
        this.regionId = regionId;
        this.key = key;
    }

    Send() {
        const myHeaders = new Headers();

        const myInit = {
            method: 'GET',
            headers: myHeaders,
            mode: 'cors',
            cache: 'default'
        };

        let url = new URL('http://catalog.api.2gis.ru/2.0/catalog/marker/search');

        url.searchParams.set('q', this.q);
        url.searchParams.set('page_size', this.pageSize);
        url.searchParams.set('region_id', this.regionId);
        url.searchParams.set('key', this.key);

        console.log(url);

        const myRequest = new Request(url, myInit);
        fetch(myRequest)
            .then((response) => (response.text()))
            .then((text) => (JSON.parse(text)))
            .then((obj) => {
            return(obj);
        });
    }
}
