import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderContainer from './Components/Header/HeaderContainer.js';
import Navigation from './Components/Navigation/Navigation.js'
import Dialogs from './Components/Dialogs/Dialogs.js';
import Music from './Components/Music/Music.js';
import {route} from "react-router-dom";
import ProfileContainer from './Components/Profile/ProfileContainer';
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from './Components/Dialogs/DialogsContainer';

import UsersContainer from './Components/Users/UsersContainer';







const App = () => {
    
    return(
        <BrowserRouter>
    <div className='app-wrapper'>
       <HeaderContainer />
        <Navigation />
        { /*<Profile />*/}
        <div className='app-wrapper-content'>
        <Route path='/dialogs' 
             render = { () => <DialogsContainer />} />
        <Route path='/profile/:userId?' render ={ ()=> <ProfileContainer />}/>
        <Route path='/Music' 
             render={() => <Music/>} />
                 <Route path='/users' 
             render={() =><UsersContainer />} />
        
        </div>
          
    </div>
        </BrowserRouter>
    );
}


export default App;
