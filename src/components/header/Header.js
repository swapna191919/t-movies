import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="headerLogo">
                <img src="https://tse1.mm.bing.net/th?id=OIP.QDmT8QyI5_Lg4IlAIIp8lgHaGM&pid=Api&P=0&h=180" alt="logo" className="logo-img" />
                <h1 className="h1">Movies</h1>
            </div>
            <div className="headerLeft">
                <Link to="/" style={{ textDecoration: "none" }}><span>Home</span></Link>
                <Link to="/movies/popular" style={{ textDecoration: "none" }}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{ textDecoration: "none" }}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{ textDecoration: "none" }}><span>Upcoming</span></Link>
            </div>
        </div>
    );
}

export default Header;
