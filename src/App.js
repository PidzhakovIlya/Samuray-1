import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialgos';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';

const App = (props) => { 

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Nav state={props.appState}/>
        <div class='app-wrapper-content'>
          <Routes>
            <Route path="/dialogs/*" element={<Dialogs state={props.appState.dialogsPage} addMessage = {props.addMessage}/>} />
            <Route path="/profile" element={<Profile state={props.appState.profilePage} addPost={props.addPost}/>} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
