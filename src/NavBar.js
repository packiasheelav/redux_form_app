import React from "react";
import Personal from './Personal';
import Portfolio from './Portfolio';
import SkillsLocation from './SkillsLocation';
import Header from './Header';
  
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";

const NavBar = (props) => {
  return (
    <div >
      <Router>
        <div className="container">
        <ul className="header">
               <li className='navBar'><NavLink exact activeStyle ={{color:'orange'}} to="/Header">Home</NavLink></li>
               <li className='navBar'><NavLink exact activeStyle ={{color:'orange'}} to="/Personal">Personal Information</NavLink></li>
               <li className='navBar'><NavLink exact activeStyle ={{color:'orange'}} to="/SkillsLocation">Skills&Location</NavLink></li> 
               <li className='navBar'><NavLink exact activeStyle ={{color:'orange'}} to="/Portfolio">Portfolio</NavLink></li> 
           </ul>          
            <Switch>
             <Route exact path="/Header" render={()=>(<Header />)}/>
             <Route exact path="/Personal" render={()=>(<Personal  onSubmit={values => {console.log('values', values);}}/>)}/>
             <Route exact path="/SkillsLocation" render={()=>(<SkillsLocation />)} /> 
             <Route exact path="/Portfolio" render={()=>(<Portfolio />)} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};
export default NavBar;
