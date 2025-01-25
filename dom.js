
// //!
// let ele = document.getElementsByClassName("test");
// console.log(ele);
// console.log(Array.isArray(ele));
// ele[0].innerText="Hello"
// // ele[0].style.backgroundColor="tomato"

// //!spread operator :- it will takeout each and every value from the original array
// //! and store it inisde one more new array(pure array).
// //? syntax : - [ ... variable];
// let x = [ ... ele];
// // console.log(x, Array.isArray(x));
// x.map(element=>{
// // console.log(element);
// element. style.backgroundColor="beige"
// })
// //!
// let ele = document.querySelector("#mru");
// console.log(ele);

// let ele = document.querySelector(".test");
// console.log(ele);

// let ele = document.querySelectorAll(".test");
// console.log(ele);
// let bgColor = document.querySelectorAll(".bgColor");
// // console.log(bgColor);
// [ ... bgColor].map((element)=>{
//     element. addEventListener("mouseover", ()=>{
// // console.log(element.innerText);
//    element.style.backgroundColor=element.innerText;
// })

// })

// let ele = document.createElement("h1");
// ele.innerText = "Dynamic creation of html element";
// // ele.setAttribute("id" , "demo");
// ele.id = "demo";

// // ele.removeAttribute("id")
// //  console.log(ele);

// let image = document.createElement("img");
// image.src = "./Screenshot 2025-01-23 130531.png";
// // console.log(image);

// document.body. appendChild(ele);
// document.body.appendChild(image)
let form = document.querySelector("form");
let username = document.getElementById("uName");
let mail = document.getElementById("uMail");
let psw = document.getElementById("uPass");

form. addEventListener("submit", (event)=>{
event.preventDefault();
// console.log(event);
// console.log("form submitted");
let uname = username. value;
let uemail = mail. value;
let upass = psw. value;
let userDetails={
    uname , uemail, upass
    }
    console.log(userDetails);
    localStorage. setItem("userData" , JSON. stringify(userDetails))

})