/* --------Param REST-------- */

/* --------CASE 1-------- */
/*function caculate(action, x, y){
    let result = 0;
    switch(action){
        case'+': 
            result = x+y;
        break;
        case'-': 
        result = x-y;
    break;
    }
    return result;
}

console.log(caculate("-", 2,3));
console.log(caculate("+", 4,3)); 
*/
// Trong trường hợp nhiều toán tử thì cách này không giải quyết được nên rest-param giúp chúng ta giải quyết như sau!

/* --------CASE 2   -------- */
function caculate(action, ...values){
    let result = 0;
    switch(action){
        case '+':
            for(let value of values) result += value;
            break;
        case '-':
            for(let value of values) result -= value;
            result += values[0];
            break;
    }
    return result;
}
console.log(caculate("-",1,2,3,4));