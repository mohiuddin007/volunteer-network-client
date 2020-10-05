import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import { InformationContext } from '../../App';
import logo from '../../logos/Group 1329.png';

const Register = () => {
  const { register, handleSubmit, watch, errors } = useForm();
    const [allInfo, setAllInfo] = useContext(InformationContext);
    const {id} = useParams();
    const [allActivity, setAllActivity] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/allActivity')
        .then(res => res.json())
        .then(data => {
            setAllActivity(data);
        })
    },[])

    const activity = allActivity.find(activity => activity.id === id) || {};

   
    const onSubmit = data => {
              const newRegistration = {...data};
              fetch('http://localhost:8000/newRegister',{
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify(newRegistration)
            })
            .then(res=>res.json())
            .then(data=>{
              if(data){
                alert('Your registration success');
              }
            })

    }

    return (
        <div className="container text-center mt-3 pt-5 containerStyle">
            <div className="row justify-content-center">
                <div className="col-md-7 border border-secondary rounded p-4">
                 <span className="rounded mx-auto d-block"><img src={logo} className="logoSizing" alt="logo"/></span>
                   <h2>Register as a volunteer</h2>
                   <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" name="name" className="form-control" placeholder="Full Name" defaultValue={allInfo.name} ref={register({ required: true })}/>
                        {errors.name && <span className="error">Name is required</span>}
                        <br/>
                        <input type="text" name="email" className="form-control" placeholder="Email" defaultValue={allInfo.email} ref={register({ required: true })}/>
                        {errors.name && <span className="error">Email is required</span>}
                        <br/>
                        <input type="date" name="date" className="form-control" id="" ref={register({ required: true })}/>
                        {errors.name && <span className="error">Date is required</span>}
                        <br/>
                        <input type="text" name="description" className="form-control" placeholder="Description" ref={register({ required: true })}/>
                        {errors.name && <span className="error">Description is required</span>}
                        <br/>
                        <input type="text" name="organization" className="form-control" placeholder="Organization Name" defaultValue={activity.activitiesName} ref={register({ required: true })}/>
                        {errors.name && <span className="error">Organization Name is required</span>}
                        <br/>
                        <input type="submit" className="btn btn-primary btn-block" value="Register"/>
                       
                   </form>
                </div>
            </div>
        </div>
    );
};

export default Register;