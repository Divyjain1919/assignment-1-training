// import logo from './spinner-removebg-preview.png';
 import './App.css';

// function App() {
// //   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// let username = "SUBhamsss";
// return (
//   <div>
//   <h1>{username}</h1>
// <p>{100+100}</p>
// </div>
// );
// }

// export default App;
// import React, { Component } from 'react'

// export default class App extends Component {
//   render() {
//     return (
//       <div>App</div>
//     )
//   }
// }
// ! component composition
import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Sidebar1 from './components/Sidebar1'
import Sidebar2 from './components/Sidebar2'
import Footer from './components/Footer'
const App = () => {

return(
<div className='app'>
<Navbar/>
<Main/>
<div className='sidebar'>
<Sidebar1/>
<Sidebar2/>
</div>
<Footer/>
</div>


)
}
export default App;
