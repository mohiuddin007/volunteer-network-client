import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const VolunteerList = (props) => {
    const {_id, name, email, date} = props.volunteer;

    const deleteVolunteer = (id) => {
        fetch(`http://localhost:8000/deleteVolunteer/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
           console.log('deleted successfully');
          })

    }
    // function deleteProduct(event, id) {
    //     fetch(`/delete/${id}`, {
    //       method: 'DELETE'
    //     })
    //     .then(res => res.json())
        // .then(result => {
        //   if(result){
        //     event.target.parentNode.style.display = 'none';
        //   }
        //  console.log(result)
        // })
    //   }

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