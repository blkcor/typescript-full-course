"use strict";
var Home;
(function (Home) {
    //when compiler compile these four classes
    //we will have four global var
    //it makes project hard to maintain
    //so we elicit namespace
    class Header {
        constructor() {
            const elem = document.createElement('div');
            elem.innerHTML = 'This is Header';
            document.body.append(elem);
        }
    }
    Home.Header = Header;
    class Content {
        constructor() {
            const elem = document.createElement('div');
            elem.innerHTML = 'This is Content';
            document.body.append(elem);
        }
    }
    Home.Content = Content;
    class Footer {
        constructor() {
            const elem = document.createElement('div');
            elem.innerHTML = 'This is Footer';
            document.body.append(elem);
        }
    }
    Home.Footer = Footer;
    class Page {
        constructor() {
            new Header();
            new Content();
            new Footer();
        }
    }
    Home.Page = Page;
})(Home || (Home = {}));
