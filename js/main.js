//show/hide search input field
let searchBtn = document.getElementById("searchBtn");
let searchInput =document.querySelector(".form-control");
let condition = true;
searchBtn.onclick = () =>{
    if(condition === true){
        searchInput.style.visibility = "visible";
        condition =false;
    }else{
        searchInput.style.visibility = "hidden";
        condition = true;
    }
}
//show/hide login popup
let login = document.querySelector(".login");
let popup = document.querySelector(".popup");
let userLog = document.querySelector(".userLog")

login.onclick = () =>{
    popup.style.display = "flex";
}
userLog.onclick = () =>{
    popup.style.display = "none";
}
//hide components when click on document
document.onclick = function(ele){
    if(ele.target.id != "searchBtn" && ele.target.id != "formControl"){
        searchInput.style.visibility = "hidden";
        condition = true;
    }
    if( ele.target.id != "popContent" && 
        ele.target.id != "user"  && 
        ele.target.id != "pass" && 
        ele.target.id != "login" &&
        ele.target.id != "navToggler"){
        popup.style.display = "none";
    }
}
let nav = document.getElementsByClassName("navbar");
// login.onclick = () =>{

// }