import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter as Router, Route} from "react-router-dom";
import HomePage from "./components/views/HomePage/HomePage";
import Footer from "./components/views/HomePage/Footer/Footer";
import SingleProductView from "./components/views/SingleProductView/SingleProductView";
import Search from "./components/views/Search/Search";
import UserAccount from "./components/views/UserAccount/UserAccount";
import {UserProvider} from "./state/userState";
import CategoryResults from "./components/views/CategoryResults/CategoryResults";
import Profile from "./components/views/UserProfile/UserProfile";
import ProductPublishingProcess from "./components/views/ProductPublishingProcess/ProductPublishingProcess";

function App() {

    return (
        <Router>
            <UserProvider>
                <Navbar/>
            </UserProvider>
            <div className="App">
                <Route exact path="/" component={HomePage}/>
                <Route path="/pretraga" component={Search}/>
                <Route path="/o-nama" component={About}/>
                <Route path="/proizvod/:productId" component={SingleProductView}/>
                <Route path="/kategorija/:categoryName" component={CategoryResults}/>
                {/*TODO Kako da link ne ostavlja prijašnji path*/}
                <Route path="/korisnik/:username" component={Profile}/>
                <Route path="/profil/:username" component={UserAccount}/>
                <Route path="/kreiranje-proizvoda" component={ProductPublishingProcess}/>
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