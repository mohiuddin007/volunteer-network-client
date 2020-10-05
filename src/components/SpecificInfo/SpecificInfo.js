import React from 'react';

const SpecificInfo = (props) => {
    const {_id, name, email, organization, date} = props.data;

    const deleteSpecificVolunteerData = (id) => {
        fetch(`https://sleepy-oasis-98992.herokuapp.com/deleteVolunteer/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            if(result){
                alert('Data deleted successfully please reload this page');
              }
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