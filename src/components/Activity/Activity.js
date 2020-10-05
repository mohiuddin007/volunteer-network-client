import React from 'react';
import { Link } from 'react-router-dom';
import './Activity.css';

const Activity = (props) => {
    const {id, activitiesName, imageUrl} = props.activity;

    return (
        <div className="col-md-3 my-1">
            <Link to={`/register/${id}`}>
            <div className="card rounded">
                <img src={imageUrl} className="card-img-top img-fluid" alt="volunteer activity"/>
                <div className="card-body cardBodyStyle">
                  <h6 className="card-text text-center">{activitiesName}</h6>
                </div>
             </div>
             </Link>
        </div>
      
    );
};

export default Activity;