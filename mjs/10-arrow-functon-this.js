/* --------FUNCTION ARROW THIS-------- */

/* --------case 1 error not export name-------- */
/* let student = {
    name: "Join",
    courses: ["Java", "C++", "IOS"],
    showInfo: function(){
        this.courses.forEach(function(course) {
            console.log(`${this.name} Study ${course}`);
        });
    }
}
*/

/* --------case 2 _this-------- */
/*
let student = {
    name: "Join",
    courses: ["Java", "C++", "IOS"],
    showInfo: function(){
        var _this = this;
        this.courses.forEach(function(course) {
            console.log(`${_this.name} Study ${course}`);
        });
    }
}
*/
/* --------case 3 bind(this)--------

let student = {
    name: "Join",
    courses: ["Java", "C++", "IOS"],
    showInfo: function(){
        this.courses.forEach(function(course) {
            console.log(`${this.name} Study ${course}`);
        }.bind(this));
    }
}
*/

/* --------case 3 arrow function-------- */

let student = {
    name: "Join",
    courses: ["Java", "C++", "IOS"],
    showInfo: function(){
        this.courses.forEach( course => console.log(`${this.name} Study ${course}`)
        );
    }
}
student.showInfo();
