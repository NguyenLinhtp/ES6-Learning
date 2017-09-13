/*----------------BLOCK SCOPE----------------  */
function drawShape() {
   
    var mContent = document.getElementById("mContent");
    mContent.innerHTML = "";
    for ( let i = 1; i <= 10; i++) {
        var elmP = document.createElement("p");
        elmP.innerHTML = i;
        mContent.appendChild(elmP);
        // Thuc hien click => aler giá trị thẻ P
        elmP.onclick = function(){
            alert("Export value of P: "+i);
        }
    }
}
function clearShape() {
    var mContent = document.getElementById("mContent");
    mContent.innerHTML = "Clear Thành Công";
}