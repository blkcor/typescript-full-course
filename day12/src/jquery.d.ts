interface JqueryInstance {
    html: (html: string) => JqueryInstance
}

// ==================== funtion reload =====================
// declare a global param when use jquery as cdn
declare var $: (param: () => void) => {};

//declare a global function
declare function $(param: () => void): void;

//global reload means polymorphism like java
declare function $(param: string): JqueryInstance;

namespace $ {
    namespace fn {
        const init: () => JqueryInstance
    }
}


//====================== implement reload with interface ============================ 
/* interface Jquery {
    (readyFunc: () => void): void;
    (selector: string): JqueryInstance;
}
declare var $: Jquery; */

