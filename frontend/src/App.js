import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import HomePage from "./components/views/HomePage/HomePage";
import Footer from "./components/views/HomePage/Footer/Footer";
import SingleProductView from "./components/views/SingleProductView/SingleProductView";
import UserProfile from "./components/views/UserProfile/UserProfile";
import Search from "./components/views/Search/Search";
import SignUp from "./components/views/SignUp/SignUp";

function App() {

    return (
        <Router>
            <Navbar/>
            <div className="App">
                <Route exact path="/" component={HomePage}/>
                <Route path="/search" component={Search}/>
                <Route path="/about" component={About}/>
                <Route path="/product/12345" component={SingleProductView}/>
                {/*TODO Kako da link ne ostavlja prijašnji path*/}
                <Route path="/product/rokiboy" component={UserProfile}/>
                <Route path="/messages" component={Messages}/>
                <Route path="/register" component={SignUp}/>
            </div>
            {/*TODO Footer treba da se pokaže na dnu stranice*/}
            {/*<Footer/>*/}
        </Router>
    );
}


function About() {
    return <h1>O nama</h1>
}

function Messages() {
    return <h1>Poruke</h1>
}


export default App;