# My Full steps of learing typescript

## Day1 
>2022.9.7
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

