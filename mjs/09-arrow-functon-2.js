/* --------FUNCTION ARROW-------- */
let courses = ["Andoi", "iOs", "php", "JavasCript"];
console.log(
    courses.map(course=>{
        return course.toUpperCase();
    })
);

let arrnumber = [9, 8, 4, 2, 3, 45, 67, 1];
console.log(
    arrnumber.sort(
        (x,y)=> x<y? true: false 
    )
);