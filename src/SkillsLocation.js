import React from "react";
import {connect} from 'react-redux';
import CheckboxGroup from './CheckboxGroup ';

import {
  NavLink,
} from "react-router-dom";
import { Field, reduxForm } from 'redux-form';
const skills = [
  { value:'Visual Design' , label: 'Visual Design' },  
  { value: 'UX Design', label: 'UX Design' },
  { value: 'Frontend Development', label: 'Frontend Development' }
];
const location=[
  {value:'Austin,Texas',label:'Austin,Texas'},
  {value:'Newyork,Newyork',label:'Newyork,Newyork'},
  {value:'Toronto,Canada',label:'Toronto,Canada'},
  {value:'Dublin,Ireland',label:'Dublin,Ireland'},
  {value:'Hursley, United Kingdom',label:'Hursley, United Kingdom'},
  {value:'Boeblingan,Germany',label:'Boeblingan,Germany'},
  {value:'some where else',label:'some where else'},

]
let SkillsLocation = props => {
  return (
    <form>
      <div className="skills">
        <ol type="1" start="2">
          <li>Skills and location</li>
        </ol>
        <hr />
        <p>Which is your primary design discipline?</p>
      </div>
      <div className="buttons">
        <div className="radiobutton">
          <Field type="radio" name="primaryDiscipline" id="box1"   value='Design Research' component="input"/>
          <label htmlFor="box1">Design Research</label>
        </div>

        <div className="radiobutton">
          <Field type="radio" name="primaryDiscipline" id="box2"  value='Visual Design' component="input"/>
          <label htmlFor="box2">Visual Design</label>
        </div>

        <div className="radiobutton">
          <Field type="radio" name="primaryDiscipline" id="box3"  value='UX Design' component="input"/>
          <label htmlFor="box3">UX Design</label>
        </div>

        <div className="radiobutton">
          <Field type="radio" name="primaryDiscipline" id="box4"  value='Front-end Dev' component="input" />
          <label htmlFor="box4">Front-end Dev</label>
        </div>
      </div>

      <div className="r1">
        <div className="c1" >
          <h4>Do you have experience with anyother disciplines?</h4>
          <div >
          <CheckboxGroup name="skills" options={skills} />
          </div>
        </div>

        <div className="c2">
          <h3>where r u interested in working?</h3>
          <p>you must be logically authorized to work without visa <br />sponshorship in location you choose
          </p>
          <p id="error" />
        <div>
        <CheckboxGroup name="location" options={location} />
          </div>
        </div>
      </div>
      <div>
      <NavLink exact activeStyle ={{color:'orange'}} to="/Personal_Information">Previous</NavLink>
      <NavLink exact activeStyle ={{color:'orange'}} to="/Portfolio">Next</NavLink>
      </div>
    </form>
  );
};
const SkillsLocationForm = reduxForm({
    form: 'SkillsLocation',
  
    destroyOnUnmount: false,
   forceUnregisterOnUnmount: true
  })(SkillsLocation)
  const mapStateToProps = (state) => {
    return {
      portfolio: state,
    }   
  }

  export default connect(mapStateToProps)(SkillsLocationForm);;
  
