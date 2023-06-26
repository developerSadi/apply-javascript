// var factorial = 1;
// var i = 1;
// while(i <=10){
//     factorial = factorial * i;
//     // console.log(factorial,i);
//     i++;
// }
// console.log(factorial);

function factorial(n){
    var factorial = 1
    var i = 1;
    while(i <= n){
        factorial = factorial * i;
        i++;
    }
    return factorial;
}
var result = factorial(5);
console.log(result);