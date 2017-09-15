/* --------Param default-------- */
// created method ShowInfo() with 2 param nameCourse and Price
function ShowInfo(nameCourse, price = 1590) {
    return `Name Course is: <b>${nameCourse}</b>- Price: <b>${price}</b> USD`; // typescript
}
var dom = document.getElementById("mContent");
dom.style.color = "#b3fb80";
dom.innerHTML = ShowInfo("ES6");
