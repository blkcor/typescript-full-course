///<reference path="components.ts"/>
namespace Home {
    //when compiler compile these four classes
    //we will have four global var
    //it makes project hard to maintain
    //so we elicit namespace
    export class Page {
        constructor() {
            new Components.Header();
            new Components.Content();
            new Components.Footer();
        }
    }
}
