import React, { useContext } from 'react';
import googleLogo from '../../logos/google.png';
import './Login.css';
import logo from '../../logos/Group 1329.png';
import firebaseConfig from './firebase.config';
import * as firebase from "firebase/app";
import "firebase/auth";
import { InformationContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    const [allInfo, setAllInfo] = useContext(InformationContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if(firebase.apps.length === 0){
          firebase.initializeApp(firebaseConfig)
    }

    const googleProvider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleSignIn = () => {
         firebase.auth().signInWithPopup(googleProvider)
        .then(function(result) {
            const {displayName, email} = result.user;
            const signedInUser = {
                isSignedIn: 'true',
                name: displayName,
                 email: email
                };
            setAllInfo(signedInUser);
            history.replace(from);
          })
          .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }

    return (
        <div className="container text-center mt-3 containerStyle">
           <div className="row justify-content-center">
                <div className="col-md-6 border border-secondary rounded loginCard">
                    <span className="rounded mx-auto d-block"><img src={logo} className="logoSizing" alt="logo"/></span>
                     <h1>Login With</h1>
                    <div className="row border border-secondary rounded-pill my-4 mx-2 cursor">
                      <div className="col-md-2" onClick={handleGoogleSignIn}>
                          <img src={googleLogo} className="imgSize" alt="googleLogo"/>
                      </div>
                      <div className="col-md-8 m-auto" onClick={handleGoogleSignIn}>
                          <h4>Continue with Google</h4>
                      </div>
                    </div>  
                    <p>Don't have an account?<span><a href="/login">Create a new account</a></span></p>  
                </div>
           </div> 
        </div>
    );
};

export default Login;