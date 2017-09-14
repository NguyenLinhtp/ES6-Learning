/* --------Spread là toán tử hay operator-------- */
let courseWeb = ["PHP", "Angular", "NodeJS"];
let courseMobile = ["IOS", "Androi"];
// let course = ["Java","Jquery"];
// thực hiện nối chuỗi trong mãng
let course = ["Java",...courseWeb,"Jquery",...courseMobile];
console.log(course);