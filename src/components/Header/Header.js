import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { InformationContext } from '../../App';
import logo from '../../logos/Group 1329.png';
import './Header.css';

const Header = () => {
  const [allInfo, setAllInfo] = useContext(InformationContext);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/">
            <img src={logo} className="logoSize" alt="logo"/>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        
          <div className="navbar-nav ml-auto">
          <h3>{allInfo.name}</h3>
              <Link to="/" className="nav-link mx-4 mt-2 ">Home</Link>
              <Link to="/donation" className="nav-link mx-4 mt-2 ">Donations</Link>
              <Link to="/events" className="nav-link mx-4 mt-2 ">Events</Link>
              <Link to="/blog" className="nav-link mx-4 mt-2">Blog</Link>
              <Link to="/register" className="nav-link">
              <button className="btn btn-outline-success mx-4 px-4 my-2 my-sm-0" type="button">Register</button>
              </Link>
              <Link to="/admin" className="nav-link">
              <button className="btn btn-outline-dark mx-4 px-4 my-2 my-sm-0" type="button">Admin</button>
              </Link>
              
          </div>
        </div>
      </nav>
    );
};

export default Header;