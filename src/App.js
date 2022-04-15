import logo from './logo.svg';
import React from 'react';
import {Routes, Route} from 'react-router-dom'
import AppIndex from './components/Index/AppIndex'
import Vote4Game from './components/Vote4Game/Vote4Game'
import Header from './components/Header/Header';
import Vote4Country from './components/Vote4Country/Vote4Country';
import Rate from './components/Rate/Rate';
import TimeOut from './components/TimeOut/TimeOut';
import Inactive from './components/Inactive/Inactive';
import Images from './components/Images/Images';
import Menu from './components/Menu/Menu';
import Discussion from './components/Discussion/Discussion';
import Discussion2 from './components/Discussion/Discussion2';


import './App.css';
// import {io} from "socket.io-client"



// import socketIOClient from "socket.io-client";
// const ENDPOINT = "http://127.0.0.1:4001";

function App() {

  let  [menuShown, setMenuShown] = React.useState(false);

  // const socket = io("http://localhost:3000")

console.log("coucouc")

//   const [response, setResponse] = React.useState("");

//   socketIOClient.on("connect", (socket) => {
//   console.log(socket.id); // ojIckSD2jqNzOqIrAGzL
// });

  // React.useEffect(() => {
  //   const socket = socketIOClient(ENDPOINT);
  //   socket.on("FromAPI", data => {
  //     setResponse(data);
  //   });
  // }, []);

  function openMenu() {
    setMenuShown(prevState => !prevState)
  }
  return (
    <div className="App">
      <Header display={menuShown} open={!menuShown} handleClick={openMenu}/>
      {/* <h1>{response}</h1> */}
      <Menu display={menuShown} handleClick={openMenu}/>
      <Routes >
        <Route path='/' element={<><AppIndex /></>} />
        <Route path='/vote4game' element={<><Vote4Game /></>} />
        <Route path='/vote4country' element={<><Vote4Country /></>} />
        <Route path='/rate' element={<><Rate /></>} />
        <Route path='/image' element={<><Images /></>} />
        <Route path='/timeOut' element={<><TimeOut /></>} />
        <Route path='/inactive' element={<><Inactive /></>} />
        <Route path='/discussion/:question' element={<><Discussion /></>} />
        <Route path='/discussion' element={<><Discussion /></>} />
        <Route path='/discussion2' element={<><Discussion2 /></>} />
        <Route path='/discussion2/:question' element={<><Discussion2 /></>} />
      </Routes>
    </div>
  );
}

export default App;
