let num1: number = 1;
let num2: number = 1;

for (let i = 0; i < 10; i++){
    let fibonacci: number = num1 + num2;
    num1 = num2;
    num2 = fibonacci;

    console.log(fibonacci);
}