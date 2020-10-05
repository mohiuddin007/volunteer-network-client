import React, { useContext, useEffect, useState } from 'react';
import { InformationContext } from '../../App';
import Activity from '../Activity/Activity';

const Home = () => {
    const [allInfo, setAllInfo] = useContext(InformationContext);
    const [allActivity, setAllActivity] = useState([]);

    
    useEffect(() => {
        fetch('https://sleepy-oasis-98992.herokuapp.com/allActivity')
        .then(res => res.json())
        .then(data => {
            setAllActivity(data); 
        })
    },[])

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8 text-center">
                     <h1 className="text-center">I GROW BY HELPING PEOPLE IN NEED</h1>
                  <div className="input-group mb-3">
                       <input type="text" className="form-control" placeholder="Search.." aria-label="Recipient's username" aria-describedby="button-addon2"/>
                    <div className="input-group-append">
                        <button className="btn btn-outline-info" type="button" id="button-addon2">Search</button>
                    </div>
                  </div>
                </div>
            </div>
            <div className="row">
                {
                    allActivity.map(activity => <Activity activity={activity} key={activity.id}/>)
                }
                
            </div>
        </div>
           
        
    );
};

export default Home;