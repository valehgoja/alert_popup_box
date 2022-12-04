let click = document.querySelector(".click");
let cancelBtn = document.querySelector(".btn1");
let deleteBtn =document.querySelector(".btn2");
let popUpBox= document.querySelector(".popup_box");

click.addEventListener("click",function(){
    popUpBox.style.opacity = "1";
    popUpBox.style.pointerEvents = "auto";
})
cancelBtn.addEventListener("click",function(){
    popUpBox.style.opacity = "0";
    popUpBox.style.pointerEvents = "none";
})
deleteBtn.addEventListener("click",function(){
    popUpBox.style.opacity = "0";
    popUpBox.style.pointerEvents = "none";
    alert("Your Account Deleted Successfully .");
    click.innerHTML = "Account Deleted";
})