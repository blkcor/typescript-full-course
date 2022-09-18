"use strict";
/* type N0 = number & string  //never
type N1  = any & 1; //any
type N2 = any & never; //any

type A = {kind:'a',foo:string}
type B = {kind:'b',foo:number}
type C = {kind:'c',foo:number}

type AB = A & B //never
type BC = B & C //never

const strArr: string[] = ['a', 'b', 'c'];

interface X  {
    c:string,
    d:number
}

interface Y {
    c:number,
    d:string
} */
Object.defineProperty(exports, "__esModule", { value: true });
/* type D = X & Y //X & Y
type E = X | Y //X | Y
const F:D = {c:1,d:1} //error
const G:E = {c:1,d:1} //ok */
/* type A = {kind:'a'|'b',foo:string}
type B = {kind:'c',foo:number}
type AB = A & B // A & B

type C = {kind:boolean,foo:number}
type D = {kind:string,foo:number}
type CD = C & D //never   */
/* type ABC = 'a' | 'b' | 'c'
type A = 'a'

let a:ABC;
let b:A;

b = a;
 */
//typeof 
/* type intersectionType = string | number | boolean;
function getRightType(args:intersectionType):string{
    if(typeof args === 'string'){
        return args;
    }else if(typeof args === 'number'){
        return JSON.stringify(args);
    }else if(typeof args === 'boolean'){
        return args.toString();
    }
} */
//instanceof
//for in
/* interface Pupil {
    ID: string;
  }
  interface Adult {
    SSN: number;
  }
  interface Person {
    name: string;
    age: number;
  }
  let person: Pupil | Adult | Person = {
    name: 'Britney',
    age: 6
  };
  const getIdentifier = (person: Pupil | Adult | Person) => {
    if ('name' in person) {
      return person.name;
    }
    else if ('ID' in person) {
      return person.ID
    }
    return person.SSN;
  } */
/*   interface Dog{
     nickName:string,
     bark():void;
  }

  interface Cat{
    nickName:string,
    meow():void;

    }

    interface Person{
        name:string,
        yell():void;
    }


function getRightAction(object:Dog|Cat|Person):void{
    if('name' in object){
        object.yell();
    }else {
        if('bark' in object){
            object.bark();
        }else{
            object.meow();
        }
    }
}



interface Necklace{
    kind:string,
    brand:string,
}

interface Bracelet{
    brand:string,
    color:string,
}

type Accessory = Necklace | Bracelet;

const isNecklace = (acc:Accessory):acc is Necklace =>{
    return (acc as Necklace).kind !== undefined;
}

const Necklace: Accessory = {kind: "Choker", brand: "TASAKI"};
const bracelet: Accessory = {brand: "Cartier", color: 'RED'};
console.log(isNecklace(bracelet)) //Logs false
console.log(isNecklace(Necklace)) //Logs true
 */
/* interface  Animal {
  name: string;
}

interface Dog extends Animal {
  break(): void;
}

interface GrayHound extends Dog {
    color:string
}

function f(fn:(dog:Dog)=>Dog):void{
    
}

const fn1:(grayHound:GrayHound)=>GrayHound ; */
/*
type T0  = [1,'2',3]

type MP<T> = T extends (infer U)[]? U:T

type T1  = MP<T0>

type UPF<T> = T extends (...args:any[]) => infer U? U:T;
type FNC = () => any;
type NFNC = UPF<FNC>


declare function foo(x:string | number ):string | number;

type T = UPF<typeof foo>



type Bar<T> = T extends {name:infer U ,age:infer U}? U :T;
type User = {
    name:string,
    age :number
}
type T2 = Bar<User>


type U5<T> = T extends {name:(a:infer U)=>void,age:(b:infer U)=>void}?U:T;

type User2 ={
    name :(a:string)=>void,
    age:(b:number)=>void
}
type T3 = U5<User2>


type A = 'a'| 'b' | 'c'
type B = 'a'
type CanExtends<T> = (args:T)=>void extends (args:A)=>void?1:0
type CanI = CanExtends<B>


type OtherBridge= ((args:{a:'a'})=>void) | ((args:{b:'b'})=>void) extends (arg:infer U)=>void ?U :never
type T8 = ((args:{a:'a'})=>void) | ((args:{b:'b'})=>void) */
// type T7 = OtherBridge
const demo_1 = require("./demo");
const { a, add } = demo_1.A;
console.log(a); //1
