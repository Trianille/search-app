export class Header {
    constructor(fn) {
        this.elClass = 'widget-head';
        this.fn = fn;
    }
    
    render() {
        const el = document.createElement('div');
        el.classList.add(this.elClass);
        
        const btn = document.createElement('div');
        
        const query = document.createElement('div');
        query.classList.add(this.elClass + '-query');
        query.innerHTML = `<input id="widget-query" type="text">`
        
        btn.classList.add(this.elClass + '-btn');
        btn.innerHTML = `<button type="submit">Search!</button>`;
        
        btn.addEventListener('click', this.fn);
        
        el.append(query, btn);
        
        return el;
    }
}