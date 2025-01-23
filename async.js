// console.log(10);
// console.log(20);
// // setTimeout(()=>{
// //     console.log(30);
// //     }, 1000);

// setInterval(()=>{
//     console.log(30);
//     document.writeln("subham");
// },1500)
// console.log(40);
// console.log(50);

// function demo (){

// console.log("Start");
// console.log(10);
// console.log(20);
// console.log(30);
// console.log(40);
// console.log("End");
// }
// demo();
let p = new Promise( (resolve , reject)=>{
    setTimeout(()=>{
    resolve("success");
    }, 5000)
    
    })
    
    async function demo (){
    console.log("Start");
    let x =await p;
    console.log(x);
    console.log("End");
    };
    demo ()
    
    async function fetchUsers (){
    
    let response =await fetch("https://jsonplaceholder.typicode.com/users");
    let data =await response. json();
    console.log(data);
    }
    fetchUsers();