const a = 1;

function add(a:number,b:number) {
    return a + b;
}


type interSectionType = number | string | boolean

interface People{
    name:string,
    age:number
}

class Cat{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }
}