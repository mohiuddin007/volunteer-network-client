import { faPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const AddEvent = () => {
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data => {
        const newEvent = {data};
            fetch('https://sleepy-oasis-98992.herokuapp.com/addEvent', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(newEvent)
            })
            .then(res=>res.json())
            .then(data=>{
              if(data){
                alert('Your event added in database and home page');
              }
            })
      

}
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
            <div className="col-md-9 containerStyle">
               <h1>Add Event</h1>
               <div className="container mt-5">
                   <div className="row justify-content-center">
                       <div className="col-md-10 bg-white rounded p-5">
                       <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="title">Title</label>
                        <input type="text" name="activitiesName" className="form-control" placeholder="Event Title" ref={register({ required: true })}/>
                        {errors.name && <span className="error">Name is required</span>}
                        <br/>
                        <label htmlFor="date">Date</label>
                        <input type="date" name="date" className="form-control" id="" ref={register({ required: true })}/>
                        {errors.name && <span className="error">Date is required</span>}
                        <br/>
                        <label htmlFor="description">Description</label>
                        <input type="text" name="description" className="form-control" placeholder="Description" ref={register({ required: true })}/>
                        {errors.name && <span className="error">Description is required</span>}
                        <br/>
                        <input type="file" name="image" className="form-control"/>
                        <br/>
                        <input type="submit" className="btn btn-primary btn-block" value="Submit"/>
                       
                   </form>
                       </div>
                   </div>
               </div>
            </div>
        </div>
    </div>
    );
};

export default AddEvent;