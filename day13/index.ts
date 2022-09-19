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
/* import { A } from './demo';
const {a,add}   = A;
console.log(a)  //1 */


// type A = 'a' | 'b';
// type B = 'a' & 'b';
// type C = (((argsddd: string) => void) | ((argsA: string) => void)) extends (args: infer U) => void ? U : A;



/* type Bar<T> = T extends {
  a: (x: infer U) => void;
  b: (x: infer U) => void;
} ? U : never;

// type T1 = string
type T1 = Bar<{ a: (x: string) => void; b: (x: string) => void }>;


// type T2 = never
type T2 = Bar<{ a: (x: string) => void; b: (x: number) => void }>;


type myPartial<T> = { [K in keyof T]?: T[K] };
type t = {
  name: string;
  age: number;
}
type NewT = myPartial<t>


type myPartialToSpecificKey<T, K extends keyof T> = { [P in K]?: T[P] };
type Eg1 = myPartialToSpecificKey<{
  key1: string,
  key2: number,
  key3: ''
}, 'key1' | 'key2'>;


type myReadOnly<T, K extends keyof T> = { readonly [P in K]: T[K] }


type PartialOptional<T, K extends keyof T> = {
  [P in K]?: T[P];
}



/**
 * @example
 *     type Eg1 = { key1?: string; key2?: number }
 */
/* type Eg3 = PartialOptional<{
  key1: string,
  key2: number,
  key3: ''
}, 'key1' | 'key2'>;
 */

/**
 * 主要实现是通过映射遍历所有key，
 * 然后给每个key增加一个readonly修饰符
 */
/* type R1<T> = {
  readonly [P in keyof T]: T[P]
} */

/**
 * 
 * type Eg = {
 *   readonly key1: string;
 *   readonly key2: number;
 * }
 */
/* type Eg = R1<{
  key1: string,
  key2: number,
}>


type T7 = Readonly<{
  key1: string,
  key2: string
}>
 */

type MyrRecord<K extends keyof any, T> = {
  [P in K]: T
}


type MyPick<T, K extends keyof T> = { [P in K]: T[P] }


type MyExclude<T, U> = T extends U ? never : T;
type Eg1 = MyExclude<'a' | 'b' | 'c', 'a' | 'e'>;


type MyExtract<T, U> = T extends U ? T : never;
type Eg2 = MyExtract<'a' | 'b' | 'c', 'a' | 'e'>;



//Pick + Exclude 
type MyO<T, K> = MyPick<T, MyExclude<keyof T, K>>

type MyOmit<T, K extends keyof any> = { [P in MyExclude<keyof T, K>]: T[P] }

type MyParameter<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;

type Eg = MyParameter<(arg1: string, arg2: number) => void>;

const detail: Eg = ['1', 2];

type getAllTypeInArr<T extends Array<any>> = T extends Array<infer U> ? U : never;

type dgetAllTypeInArr<T extends Array<any>> = T extends (infer U)[] ? U : never;

type Eg10 = getAllTypeInArr<[number, string]>
type Eg20 = dgetAllTypeInArr<[number, string]>

type MyResultType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : never
type Eg31 = MyResultType<() => string | number | symbol>


type MyConstructorParameters<T extends new (...args: any) => any> = T extends new (...args: infer P) => any ? P : never;

abstract class Person { }








