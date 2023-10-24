let num1 = 1;
let num2 = 1;

for (let i = 0; i < 10; i++){
    let fibonacci = num1 + num2;
    num1 = num2;
    num2 = fibonacci;

    console.log(fibonacci);
}