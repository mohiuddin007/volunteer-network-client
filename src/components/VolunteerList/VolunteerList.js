import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const VolunteerList = (props) => {
    const {_id, name, email, date} = props.volunteer;

    const deleteVolunteer = (id) => {
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
        
        <div className="col-md-5 border border-primary rounded m-4 p-2 bg-white">
            <h5>{name}</h5>
            <p>{email}</p>
            <p>{date}</p>
             <button className="btn btn-info" onClick={() => deleteVolunteer(`${_id}`)}><FontAwesomeIcon icon={faTrashAlt}/> Delete</button>
        </div> 
         
    );
};

export default VolunteerList;