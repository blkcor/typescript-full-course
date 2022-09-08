namespace Components {
    export class Header {
        constructor() {
            const elem: HTMLDivElement = document.createElement('div');
            elem.innerHTML = 'This is Header';
            document.body.append(elem);
        }
    }
    export class Content {
        constructor() {
            const elem: HTMLDivElement = document.createElement('div');
            elem.innerHTML = 'This is Content';
            document.body.append(elem);
        }
    }
    export class Footer {
        constructor() {
            const elem: HTMLDivElement = document.createElement('div');
            elem.innerHTML = 'This is Footer';
            document.body.append(elem);
        }
    }
}