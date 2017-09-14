/*----------------Template String----------------*/
var elm = document.getElementById("mContent");
// elm.style.color = "#5d7fe2";
// var name_course = "TypeScript";
// var price = "10";
// elm.innerHTML = '<div> Course Name: <b>' + name_course + '</b>, price: <b style="color: red"> '+price+' USD</b> </div>';

// /*Using Template String, thay ' => `
// elm.innerHTML = `<div> Course Name: <b>${name_course}</b>,
//                     price: <b style="color: red"> ${price} USD</b> 
//                 </div>`;

let todo = {
    id: 100,
    name: "Designer",
    status: false
};
// elm.innerHTML = `<div id="todo-id-${todo.id}">
                //     <i class="${todo.status == true ? "hidden" : ""} glyphicon glyphicon-ok"></i>
                //     <span class="name">${todo.name}</span>
                // </div>`;