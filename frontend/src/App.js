import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import HomePage from "./components/views/HomePage/HomePage";
import Footer from "./components/views/HomePage/Footer/Footer";
import SingleProductView from "./components/views/SingleProductView/SingleProductView";
import UserProfile from "./components/views/UserProfile/UserProfile";
import Search from "./components/views/Search/Search";
import UserAccount from "./components/views/UserAccount/UserAccount";
import {UserProvider} from "./state/userState";

function App() {

    return (
        <Router>
            <UserProvider>
                <Navbar/>
            </UserProvider>
            <div className="App">
                <Route exact path="/" component={HomePage}/>
                <Route path="/search" component={Search}/>
                <Route path="/about" component={About}/>
                <Route path="/product/:productId" component={SingleProductView}/>
                <Route path="/category/:categoryName" component={Search}/>
                {/*TODO Kako da link ne ostavlja prijašnji path*/}
                <Route path="/user/:username" component={UserProfile}/>
                <Route path="/dashboard/:username" component={UserAccount}/>
            </div>
            {/*TODO Footer treba da se pokaže na dnu stranice*/}
            {/*<Footer/>*/}
        </Router>
    );
}


function About() {
    return <h1>O nama</h1>
}


export default App;