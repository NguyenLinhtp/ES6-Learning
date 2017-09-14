let todoArr = [
    "Coding",
    "Study Script",
    "Designer"
];
/* --------For-------- */
// let lengthArr = todoArr.length;
// for(let i = 0; i<lengthArr; i++){
//     console.log(i+": "+ todoArr[i]);
// }
/* --------For IN-------- */
// for(let index in todoArr){
//     console.log(index+": "+todoArr[index]);
// }
/* --------For OF-------- */
// for(let todo of todoArr){
//     console.log(todo);
// }

/* --------For OBJECT-------- */
let todoObj = {
    id: 100,
    name: "Designer",
    status: false
};
for(let index in todoObj){
    // console.log(index+": "+todoObj[index] );
}
/* Chú ý: Đối với một đối tượng chúng ta không sử for of */