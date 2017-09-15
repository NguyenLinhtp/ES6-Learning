/* --------FUNCTION ARROW-------- */

/* Case 1*/
function func1(name, age) {
    return `My name is ${name}, ${age} Years old`;
}

/* Case 2*/
var func2 = function (name, age) {
    return ` func2 My name is ${name}, ${age} Years old`;
}

/* Case 3 Arrow Function*/
var func3 = (name, age) => {
    return ` func3 My name is ${name}, ${age} Years old`;
}
/* Case 4 Arrow Function*/
var func4 = (name, age) => ` func4 My name is ${name}, ${age} Years old`;
//return ` func3 My name is ${name}, ${age} Years old`;

/* Case 5 Arrow Function 1 param*/
var func5 = name => {
    return ` func5 My name is ${name}`;
}

/* Case 6 Arrow Function haven't param*/
var func5 = () => {
    return ` func5 My name is`;
}
console.log(func5());

