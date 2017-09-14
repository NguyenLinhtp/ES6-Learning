/* --------Destructoring about array and object-------- */
let arr = [100, "Coder", true];
//  Gán giá trị arr vào một array khác
let [id, job, status] = arr;
// console.log("Array: "+id+" "+job+" "+status);

let obj = {
    idobj: 100,
    todo1: "Designer",
    statusobj: true,
}
let {idobj, todo1, statusobj, createdBy="LinhNguyen"} = obj;
// console.log("OBJ: "+ idobj +" "+todo1+" "+statusobj+" "+createdBy );
