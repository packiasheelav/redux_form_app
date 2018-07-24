import React from "react";
import {connect} from 'react-redux';

import {
  NavLink,
} from "react-router-dom";
import { Field, reduxForm } from 'redux-form';
import "./Style.css";

let portfolio = props => {
    const { handleSubmit } = props
  return (
    <form className="skills" onSubmit={handleSubmit}>
      <ol type="1" start="3">
        <li>Skills and location</li>
      </ol>
      <hr />
      <p>
        Prove you are IBM's next great designer by showing us who you are. What
        you have done. How you think. Tell us your story.
      </p>
      <br />
      <div className="portfolio">
        <Field id="portfolio" type="text" placeholder="Portfolio link" name="portfolioLink" component="input" />
        <br />
        <br />
        <textarea placeholder="Anything else(link availability etc)?" name="additionalLink" component="input"/>
        <br />
        <br />
      
      </div>
      <div>
     <NavLink exact activeStyle ={{color:'orange'}} to="/SkillsLocation">Previous</NavLink>
     <NavLink exact activeStyle ={{color:'orange'}} to="/Home">Next</NavLink>
     </div>
     <button type="submit">Submit</button>
    </form>
    
  );
};

const reduxFormPortfolio = reduxForm({
    form: 'portfolioForm',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true
  })(portfolio)

  const mapStateToProps = (state) => {
    return {
      portfolio: state,
        //  personalformErrors: getFormSyncErrors('PersonalForm')(state),
    }   
  }

  export default connect(mapStateToProps)(reduxFormPortfolio);
