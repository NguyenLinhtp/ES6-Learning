/* --------OOP-CLASS-------- */
class Persion{
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
// creat class Student entends class Persion
class Student extends Persion{
    constructor(code, name, age, score){
        super(code, name, age);
        this.score = score;
    }
    ShowInfo(){
        super.ShowInfo();
        console.log("-"+this.score);
    }
}
// created Object studenobj
let persionobj = new Persion("1111111", "Linh", 1994);
console.log(persionobj);

let studentobj = new Student("222222", "Linh", 1990, 100);
console.log(studentobj);
