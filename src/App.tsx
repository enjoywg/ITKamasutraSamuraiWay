import React from 'react';
import c from './App.module.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Dialogs/Dialogs";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import {Route} from 'react-router-dom';
import state, {addPost, updateNewPostTextTemp} from './redux/state'

function App() {
    return (
            <div className={c.app_wrapper}>
                <Header/>
                <Navbar friends={state.sidebar.friends}/>
                <div className={c.app_wrapper_content}>
                    <Route path="/profile" render={ () => <Profile posts={state.profilePage.posts}
                                                                   addPost={addPost}
                                                                   newPostTextTemp={state.profilePage.newPostTextTemp}
                                                                   updateNewPostTextTemp={updateNewPostTextTemp}
                    />}/>
                    <Route path="/dialogs" render={ () => <Dialogs dialogs={state.dialogsPage.dialogs}
                                                                   messages={state.dialogsPage.messages}/>}/>
                    <Route path="/news" render={ () => <News/>}/>
                    <Route path="/music" render={ () => <Music/>}/>
                    <Route path="/settings" render={ () => <Settings/>}/>
                </div>
                <Footer/>
            </div>
    );
}

export default App;
