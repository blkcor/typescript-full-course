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

```




