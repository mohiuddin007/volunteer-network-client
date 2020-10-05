import React, { createContext, useState } from 'react';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import Login from './components/Login/Login';
import Events from './components/Events/Events';
import Admin from './components/Admin/Admin';
import Register from './components/Registration/Register';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AddEvent from './components/AddEvent/AddEvent';
import Blog from './components/Blog/Blog';
import Donation from './components/Donation/Donation';

export const InformationContext = createContext();

function App() {
   const [allInfo, setAllInfo] = useState({});  

  return (
    <InformationContext.Provider value={[allInfo, setAllInfo]}>
    <Router>
      <Switch>
         <Route exact path="/">
          <Header/>
           <Home/>
         </Route>
         <Route path="/login">
           <Login/>
         </Route>
         <Route path="/events">
           <Header/>
           <Events/>
         </Route>
         <PrivateRoute path="/register/:id">
           <Header/>
           <Register/>
         </PrivateRoute>
         <PrivateRoute path="/register">
           <Header/>
           <Register/>
         </PrivateRoute>
         <Route path="/donation">
            <Header/>
            <Donation/>
         </Route>
         <Route path="/blog">
           <Header/>
           <Blog/>
         </Route>
         <Route path="/admin">
          <Header/>
           <Admin/>
         </Route>
         <Route path="/addEvent">
           <Header/>
           <AddEvent/>
         </Route>
         <Route path="*">
           <NoMatch/>
         </Route>
      </Switch>
    </Router>
    </InformationContext.Provider>   
    
  );
}

export default App;
