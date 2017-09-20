/* --------Anhaned: Property value shorthan-------- */
function getCourse(name, price, free){
    return{
        name,
        price,
        free
    } 
}
// console.log(getCourse("ES6", 200, true));

/* --------Anhaned: Method properties-------- */
function getCourse(name, price, free){
    return{
        name,
        price,
        free,
        // Tạo method
        ShowInfor: function(){
            // console.log(`name + price + free`);
        },
        ShowInfor2(delimiter){
            console.log(`${name + delimiter+ price + delimiter+ free}`);
        },

    } 
}
// created doi tuong
var mycourse = getCourse("ES6", 200, true);
mycourse.ShowInfor2("---");
console.log(mycourse);
/* --------Anhaned: Computed Property Names-------- */
let propRefix = "support-";
let bootstrapSP = {
    [propRefix+ "ie"]: true,
    [propRefix+ "chrome"]: true,
    [propRefix+"safari"]: false
}
console.log(bootstrapSP);
