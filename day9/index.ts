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