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
