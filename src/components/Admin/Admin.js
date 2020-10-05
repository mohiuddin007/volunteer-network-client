import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faUsers } from '@fortawesome/free-solid-svg-icons'
import VolunteerList from '../VolunteerList/VolunteerList';
import './Admin.css';



const Admin = () => {
    const [volunteerList, setVolunteerList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/allVolunteerList')
        .then(res => res.json())
        .then(data => {
             setVolunteerList(data);
        })
    },[])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                <ul className="navbar-nav mt-5">
                    <Link to="/admin">
                    <li className="nav-link cursor"><FontAwesomeIcon icon={faUsers} />Volunteer register list</li>
                    </Link>
                    <Link to="/addEvent">
                    <li className="nav-link cursor"><FontAwesomeIcon icon={faPlus} />Add event</li>
                    </Link>
                </ul>                   
                </div>
                <div className="col-md-9 backgroundStyle">
                    <h1>All Volunteer List</h1>
                   <div className="row justify-content-center">
                        {
                            volunteerList.map(volunteer => <VolunteerList volunteer={volunteer} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;