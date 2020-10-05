import React from 'react';

const SpecificInfo = (props) => {
    const {_id, name, email, organization, date} = props.data;

    const deleteSpecificVolunteerData = (id) => {
        fetch(`http://localhost:8000/deleteVolunteer/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
           console.log('deleted successfully');
          })

    }
    return (
        <div className="col-md-5 border border-primary rounded m-4 p-3 bg-white">
            <h5>Volunteer Name: {name}</h5>
            <p>Volunteer Email: {email}</p>
            <p>Register Date: {date}</p>
            <h5>Your Activity: {organization}</h5>
            <p>{_id}</p>
            <button className="btn btn-info"  onClick={() => deleteSpecificVolunteerData(`${_id}`)}>Cancel</button>
        </div>
    );
};

export default SpecificInfo;