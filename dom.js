
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
// let form = document.querySelector("form");
// let username = document.getElementById("uName");
// let mail = document.getElementById("uMail");
// let psw = document.getElementById("uPass");

// form. addEventListener("submit", (event)=>{
// event.preventDefault();
// // console.log(event);
// // console.log("form submitted");
// let uname = username. value;
// let uemail = mail. value;
// let upass = psw. value;
// let userDetails={
//     uname , uemail, upass
//     }
//     console.log(userDetails);
//     localStorage. setItem("userData" , JSON. stringify(userDetails))

// })


//! let mainEle = document.createElement("div");
// mainEle.setAttribute("id", "mainBlock");
// mainEle.style.border="2px solid red";
// mainEle.style.width="550px";
// mainEle.style.height="550px";
// console.log(mainEle);

// let topEle = document.createElement("div");
// topEle.setAttribute("class", "topBlock");
// // console.log(topEle);

// let image = document.createElement("img");
// image.src = "Screenshot 2025-01-23 130531.png";
// image.style.width="550px";

// let bottomEle = document.createElement("div");
// bottomEle.setAttribute("class", "bottomBlock");
// // console.log(bottomEle);

// let h1 = document.createElement("h1");
// h1.innerText = "CLOSURE";
// h1.style.textAlign="center";



// let btn = document.createElement("button");
// btn.innerText = "TextView";
// btn.style.border="none";
// btn.style.padding="20px";
// btn.style.backgroundColor="dodgerblue";
// btn.style.color="white"

// bottomEle.appendChild(h1);
// bottomEle.appendChild(btn);

// topEle.appendChild(image);
// mainEle.appendChild(topEle);
// mainEle.appendChild(bottomEle);
// document.body.appendChild(mainEle)

//!form local storage //!  
let form = document.querySelector("form");
let usernanme = document.getElementById("uName");
let password = document.getElementById("uPass");
let check = document.getElementById("check");
let show = document.getElementById("show")
let gender = document.getElementsByName("gender");
console.log(gender);

// ! hiding and showing the password values
check.addEventListener("click",event=>{
     //.console.log(event.target. checked);
    if(event.target. checked == true){
        password.setAttribute("type", "text");
        show. innerText = "hide password";
    }else{
    password. setAttribute("type", "password");
    show. innerText = "show password";
    }
})
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let UN = useranme.value;
  let UP = password.value;
  let gen = "";

  for (let i = 0; i <= gender.length - 1; i++) {
    // console.log(i);
    // console.log(gender[i].value);
    // console.log(gender[i].checked);
    if (gender[i].checked == true) {
      gen = gender[i].value;
    }
  }

  // console.log(UN, UP, gen);
  let userDetails = {
    useranme: UN,
    password: UP,
    gender: gen,
  };
  console.log(userDetails);
  sessionStorage.setItem("userData", JSON.stringify(userDetails));
});