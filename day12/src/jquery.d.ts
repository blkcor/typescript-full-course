// declare a global param when use jquery as cdn
declare var $: (param: () => void) => {};

//declare a global function 
declare function $(param: () => void): void;

//global reload means polymorphism like java
declare function $(param:string) : {
    html:(template:string) => void
}