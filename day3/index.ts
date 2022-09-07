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