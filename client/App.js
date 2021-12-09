import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navigation/Navbar";
import Routes from "./Routes";
import Footer from "./components/Navigation/Footer";

const App = () => {
    return (
        <div className="app-container">
            <Navbar />
            <Routes />
            <Footer />
        </div>
    );
};

export default App;
