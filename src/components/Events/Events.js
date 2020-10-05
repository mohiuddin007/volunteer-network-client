import React, { useContext, useEffect, useState } from 'react';
import { InformationContext } from '../../App';
import SpecificInfo from '../SpecificInfo/SpecificInfo';

const Events = () => {
    const [allInfo, setAllInfo] = useContext(InformationContext);
    const [specificVolunteer, setSpecificVolunteer] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/specificVolunteer?email='+allInfo.email)
        .then(res => res.json())
        .then(data => {
            setSpecificVolunteer(data)
        })
    }, [])
    return (
        <div className="container">
           <div className="row mt-4 justify-content-center backgroundStyle">
               {
                   specificVolunteer.map(data => <SpecificInfo data={data} key={data._id}/>)
               } 
           </div>
        </div>
    );
};

export default Events;