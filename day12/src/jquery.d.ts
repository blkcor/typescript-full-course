declare module 'jquery' {
    interface JqueryInstance {
        html: (html: string) => JqueryInstance
    }
    // ==================== funtion reload =====================
    // declare a global param when use jquery as cdn
    var $: (param: () => void) => {};

    //declare a global function
    function $(param: () => void): void;

    //global reload means polymorphism like java
    function $(param: string): JqueryInstance;

    namespace $ {
        namespace fn {
            const init: () => JqueryInstance
        }
    }
    export = $
}
//====================== implement reload with interface ============================ 
/* interface Jquery {
    (readyFunc: () => void): void;
    (selector: string): JqueryInstance;
}
declare var $: Jquery; */

