var num1 = 1;
var num2 = 1;
for (var i = 0; i < 10; i++) {
    var fibonacci = num1 + num2;
    num1 = num2;
    num2 = fibonacci;
    console.log(fibonacci);
}
