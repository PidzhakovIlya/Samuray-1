import React from 'react';
import { Suspense } from 'react';
import { connect } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { compose } from 'redux';
import './App.css';
import Preloader from './components/common/Preloader/Preloader';
// import DialgosContainer from './components/Dialogs/DialgosContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import Music from './components/Music/Music';
import NavbarContainer from './components/Navbar/NavbarContainer';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer.';
import { initializeApp } from './redux/app-Reducer';

const DialgosContainer = React.lazy(() => import('./components/Dialogs/DialgosContainer'));
// const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component {
  captchAllUnchandedErrors = (promiseRejectionEvent) =>{
    alert('error')
 }
  componentDidMount() {
    this.props.initializeApp();
  window.addEventListener('unchandledrejection', this.captchAllUnchandedErrors)
  }

  componentWillUnmount(){
    window.removeEventListener('unchandledrejection', this.captchAllUnchandedErrors)
  }

  render() {
    if(!this.props.initialized){
    return <Preloader/>
  }

    return (
      
      <div className='app-wrapper'>
        <HeaderContainer />
        <NavbarContainer />
        <div class='app-wrapper-content'>
        <Suspense fallback={<div> <Preloader/></div>}>
          <Routes>
            <Route path="/" Navigate to = '/profile'/>
            <Route path="/dialogs" element={<DialgosContainer />} />
            <Route path="/profile/:userId" element={<ProfileContainer />} />
            <Route path="/profile" element={<ProfileContainer />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/login" element={<Login />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
          </Suspense>
        </div>
      </div>
    );
  }
}

const mapStateToprops = (state) =>({
  initialized: state.app.initialized
})
export default compose(
  connect(mapStateToprops, {initializeApp})(App));
  