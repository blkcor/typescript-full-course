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
