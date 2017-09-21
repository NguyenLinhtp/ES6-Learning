/* --------OOP-CLASS-------- */
class Student{
    // Phuong thuc khoi tao
    constructor(code, name, age){
        this.code = code; //Gan gia tri trong phuong thuc bang gia tri truyen vao
        this.name = name;
        this.age = age;
    };
    // Created phuong thuc ShowInfo
    ShowInfo(){
        console.log(this.code + "-"+ this.name+ "-" + this.getOld());
    };
    // Phuong thuc tinh tuoi
    getOld(){
        let today = new Date();
        let yearsold = today.getFullYear();
        return yearsold - this.age;
    }
}
// created Object studenobj
let studentobj = new Student("sv01", "Linh", 1994);
console.log(studentobj);
