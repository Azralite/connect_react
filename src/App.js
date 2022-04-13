import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import AppIndex from './components/Index/AppIndex'
import Vote4Game from './components/Vote4Game/Vote4Game'
import Header from './components/Header/Header';
import Vote4Country from './components/Vote4Country/Vote4Country';
import Rate from './components/Rate/Rate';
import TimeOut from './components/TimeOut/TimeOut';
import Inactive from './components/Inactive/Inactive';

function App() {
  return (
    <div className="App">
      <Routes >
        <Route path='/' element={<><Header /><AppIndex /></>} />
        <Route path='/vote4game' element={<><Header /><Vote4Game /></>} />
        <Route path='/vote4country' element={<><Header /><Vote4Country /></>} />
        <Route path='/rate' element={<><Header /><Rate /></>} />
        <Route path='/image' element={<><Header /><Vote4Game /></>} />
        <Route path='/timeOut' element={<><Header /><TimeOut /></>} />
        <Route path='/inactive' element={<><Header /><Inactive /></>} />
        <Route path='/vote4game' element={<><Header /><Vote4Game /></>} />
      </Routes>
    </div>
  );
}

export default App;
