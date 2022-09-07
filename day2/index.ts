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



