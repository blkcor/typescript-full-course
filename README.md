# My Full steps of learing typescript

## Day1 
>2022.9.6
<hr/>
<strong>Type Annotation && Type Inference</strong>
<hr/>

```typescript
/* const teacher: {
    name: string,
    age: string
} = {
    name: 'czl',
    age: '12'
}

console.log(teacher);

const numbers: Array<number> = [1, 2, 3]

const getTotal: () => number = () => 1;

console.log(getTotal());
 */



// type annotation ：类型注解 即我们手动给变量添加类型
// type infrence : 类型推断 在某些情况下 即使我们不给变量类型声明 ts可以自动推断其类型

//exp1 此时ts自动推断sum的类型 无需指明 num1 num2 的类型
const num1 = 1;
const num2 = 2;
const sum = num1 + num2;

//exp2 此时函数参数类型未指明 为any 要进行类型声明 
const add1 = 1;
const add2 = 2;
function getTotal(add1: number, add2: number) {
    return add1 + add2;
}
const total = getTotal(add1, add2);

```

## Day2
>2022.9.7
<hr/>
<strong>Function Type</strong>
<hr/>

```typescript
/**
 * 
 * @param num1 
 * @param num2 
 * @returns number 
 */
function add(num1: number, num2: number): number {
    return num1 + num2;
}
const addTotal = add(1, 2);
console.log(addTotal);

/**
 * @return void
 */
function sayHello(): void {
    console.log('hello');
}
sayHello();

/**
 * function will continue but never have a return value
 */
function errorEmitter(): never {
    throw new Error();
    // or while(1)
}

/**
 *  how to use ES6: destruction
 *  reflect each other
 */
function addT({ first, second }: { first: number, second: number }): number {
    return first + second;
}

/**
 * OOP class constructor getter and setter
 */
class Person {
    private name: string
    private age: number
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    setName(name: string) {
        this.name = name;
    }
}
const persopn: Person = new Person('blkcor', 21);
console.log(persopn.getName()); //blkcor

```




## Day3
>2022.9.8
<hr/>
<strong>Array and Tuple</strong>
<hr/>

```typescript
//=================Array============================
// number array
const arr: number[] = [1, 2, 3]

//string array
const strArr: string[] = ['I am superHero!']

//undifine array
const undifineArr: undefined[] = [undefined]

//object arr 
const objArr: { name: string, age: number }[] = [{ name: 'blkcor', age: 21 }]

// ==> we can replace it with interface
interface Person {
    name: string,
    age: number
}

// and write like this
const newObjArr: Person[] = [{ name: 'blkcor', age: 21 }]

//or with type alias
type User = {
    name: string,
    age: number
}

// and write like this
const newObjArr2: User[] = [{ name: 'blkcor', age: 21 }]

//or with class
class UserClass {
    name: string
    age: number
}

// and write like this ```` tada!
const newObjArr3: UserClass[] = [{ name: 'blkcor', age: 21 }]


//============================Tuple====================
//use tuple to restrict the content of the array 😊
const teacherInfo: [string, string, number] = ['Dell', 'mail', 18];

```


## Day4
>2022.9.10
<hr/>
<strong>Interface</strong>
<hr/>

```typescript
//===========================interface==================================
interface Person {
    //normal attr
    readonly name: string
    age: number
    //permit other attributes
    [propName: string]: any
    //abs function attr 
    Onfocus?: (who: string) => string;
}

//implement between interface
interface Teacher extends Person {
    teach: () => void;
}

//define function interface
interface SayHi {
    (word: string): string;
}

const person: Person = {
    name: 'blkcor',
    age: 12,
    Onfocus: (who: string) => {
        return who;
    }
}

class User implements Person {
    name: string
    age: number
    Onfocus = (who: string) => {
        return `I am ${who}`;
    }
}

const setPersonName = (person: Person, age: number) => {
    person.age = age;
    person.sex = '12';
}

//user function interface 
const sayHi: SayHi = (word: string) => word;


```





## Day5 
>2022.9.10
<hr/>
<strong>Abstract Class</strong>
<hr/>

```typescript
abstract class Geom {
    //abstract function getArea
    abstract getArea(): number;
}

class Circle extends Geom {
    private radius: number;
    getArea() {
        return Math.PI * (this.radius ** 2);
    }
}

class Square {
    private width: number;
    getArea() {
        return this.width ** 2;
    }
}

class Triangle {
    private width: number;
    private height: number;
    getArea() {
        return this.width * this.height;
    }
}

```

## Day6
>2022.9.11
<hr/>
<strong>nodemon and concurrently</strong>
<hr/>

```bash
yarn add nodemon concurrently -D

```
### 什么是nodemon?
帮助我们动态监测项目文件的变化,并且帮助我们执行自定义脚本。

### 什么是concurrently
顾名思义,可以帮助我们并行执行脚本命令

```json
    ...
    'scripts':{
        'dev:build':"tsc -w" //动态监测源代码  变化帮我们进行编译  可以设置ts.config.json中的OutDir指定输出目录
        'dev:start':"nodemon node ./xxx/xxx.js" //监测项目变化 帮助我们执行后面的node脚本 可配置nodemonConfi ignore file/dir optionally
        'dev':"concurrently npm:dev:*" //很容易看懂
    }

    ...
```



## Day7
>2022.9.12
<hr/>
<strong>Type Assignment</strong>
<hr/>

```typescript
interface Bird {
    fly: boolean;
    sing: () => {};
}
interface Dog {
    fly: boolean;
    bark: () => {};
}
// animal is the associated type
function trainAnial(animal: Bird | Dog) {
    //Types of assertions  1) var as Type  ///  2) (T)var
    if (animal.fly) {
        (animal as Bird).sing()
    } else {
        (animal as Dog).bark()
    }
}

```









## Day8
>2022.9.13
<hr/>
<strong>enum</strong>
<hr/>

```typescript
enum Weather {
    SPRING,
    SUMMER,
    AUTOMN,
    WINTER
}

function getWeather(month: number): Weather {
    if (3 <= month && month < 6) {
        return Weather.SPRING;
    } else if (6 <= month && month < 9) {
        return Weather.SUMMER;
    } else if (9 <= month && month < 12) {
        return Weather.AUTOMN;
    } else {
        return Weather.WINTER;
    }
}
console.log(getWeather(1))

```



## Day9
>2022.9.14
<hr/>
<strong>genericity</strong>
<hr/>

```typescript
    //generic type : T
function join<T>(first: T, second: T) {
    console.log(first);
    console.log(second);
}
// declare the detail type <T>: <number>
join<number>(1, 2);

//tow or more params
function join2<T, P>(param1: T, param2: P) {
    console.log(param1);
    console.log(param2);
}
// declear anonymous
join2(1, '3');
// declare obviously
join2<number, string>(1, '2');

//we can also asign the result ....
```


## Day10
>2022.9.15
<hr/>
<strong>namespace</strong>
<hr/>


>home.ts
```typescript
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

```

>components.ts
```typescript
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

```




## Day11
>2022.9.16
<hr/>
<strong>parcel pack ts</strong>
<hr/>

>installment
```bash
yarn add parcel -D

```

```json
"scripts":{
    //will parse .ts .d.ts  file in the index.html 
    "test":"parcel ./src/index.html"
}

```

## Day12
>2022.9.17
<hr/>
<strong>x.d.ts global type</strong>
<hr/>

```typescript
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



```

<h3 color='red' > 这仅仅只是人工帮助ts理解js的代码, 实际上的逻辑还是执行js中的 < /h3></h3>














## Day7
>2022.9.12
<hr/>
<strong></strong>
<hr/>