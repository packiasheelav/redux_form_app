import React from "react";
import { NavLink } from "react-router-dom";
import { Field, reduxForm,getFormSyncErrors } from 'redux-form';
import {connect} from 'react-redux';

import "./Style.css";
 const validate=values=>{
    return{
        name:!values.name ? 'this field is required ': undefined,
        email:!values.email ? 'this field is required':undefined,
        reEnterEmail:!values.email ? 'this field is required':undefined,
        address1:!values.address1 ? 'this field is required':undefined,
        city:!values.city ? 'this field is required':undefined,
        address2:!values.address2 ? 'this field is required':undefined,
        state:!values.state ? 'this field is required':undefined,
        country:!values.country ? 'this field is required':undefined,
        zip:!values.zip ? 'this field is required':undefined,
        howDidYouHear:!values.howDidYouHear ? 'this field is required':undefined
    }
}
const Personal=(props)=> {
    console.log('props', props);
    console.log(props.personalformErrors);
    const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <ol type="1">
        <li>Personal information</li>
      </ol>
      <hr />
      <div className="row">
        <div className="column1">
          <Field id="nameValidation" type=" text" placeholder="Full Name*" name="name" component="input" />
          <div style={{ color: 'red' }}>
				{props.anyTouched && props.personalformErrors.name}
			</div>
          <br />
          <Field placeholder="Email*" type=" text" name="email" component="input" />
          <div style={{ color: 'red' }}>
				{props.anyTouched && props.personalformErrors.email}
			</div>
          <br />
          <Field placeholder="Re-enter email*" name="reEnterEmail" component="input" /><br />
          <div style={{ color: 'red' }}>
				{props.anyTouched && props.personalformErrors.reEnterEmail}
			</div>
          <br />
        </div>

        <div className="column2">
          <Field type="number" id="phoneNumber" placeholder="Phone number*" name="phoneNo" component="input"/>
          <div style={{ color: 'red' }}>
				{props.anyTouched && props.personalformErrors.phoneNo}
			</div>
        </div>

        <div className="column3">
          <Field type="text" id="address1" placeholder="Address*" name="address1" component="input"/>
          <div style={{ color: 'red' }}>
				{props.anyTouched && props.personalformErrors.address1}
			</div>
          <Field type="text" id="address2" name="address2"  component="input"/>
          <div style={{ color: 'red' }}>
				{props.anyTouched && props.personalformErrors.address2}
			</div>
        </div>
        <div className="column4">
          <Field id="city" type="text" name="city" placeholder="City*" component="input"/>
          <div style={{ color: 'red' }}>
				{props.anyTouched && props.personalformErrors.city}
			</div>
         
          <Field id="state" type="text" placeholder="State" name="state" component="input" />
          <div style={{ color: 'red' }}>
				{props.anyTouched.state && props.personalformErrors.state}
			</div>
          <Field id="country" type="text" placeholder="country/Region" name="country" component="input"/>
          <Field id="postalCode" type="number" placeholder="zip/postal code" name="zip" component="input"/>
        </div>
        <div className="column5">
          <Field type="text" placeholder="How did you hear about us?" name="howDidYouHear" component="input"/>
        </div>
      </div>
      <div>
        <NavLink exact activeStyle={{ color: "orange" }} to="/">Previous</NavLink>
        <NavLink exact activeStyle={{ color: "orange" }} to="/Skills&Location">Next</NavLink>
      </div>
      <NavLink exact activeStyle ={{color:'orange'}} to="/SkillsLocation">Previous</NavLink>
      <NavLink exact activeStyle ={{color:'orange'}} to="/Portfolio">Next</NavLink>
      <button type="submit" disabled={props.invalid}>Submit</button>
    </form>
  );
};

const reduxFormpersonal=reduxForm({
    form: 'PersonalForm',validate, 
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
  })(Personal);

  const mapStateToProps = (state) => {
    return {
         personal: state,
         personalformErrors: getFormSyncErrors('PersonalForm')(state),
        
    }
  }
  export default connect(mapStateToProps)(reduxFormpersonal)
