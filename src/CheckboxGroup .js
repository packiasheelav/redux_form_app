import React, {Component} from 'react';
import {Field} from "redux-form";
import PropTypes from 'prop-types';
import './Style.css';

export default class CheckboxGroup extends Component {

  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })).isRequired
  };

  field = ({input, meta, options}) => {

    const {name, onChange} = input;
    const {touched, error} = meta;
    const inputValue = input.value;

    const checkboxes = options.map(({label, value}, index) => {
      const handleChange = (event) => {
        const arr = [...inputValue];
        if (event.target.checked) {
          arr.push(value);
        }
        else {
          arr.splice(arr.indexOf(value), 1);
        }
        console.log(arr);
        return onChange(arr);
      };
      const checked = inputValue.includes(value);
      return (
        <div key={`checkbox-${index}`}>
          <input type="checkbox"  id={value} name={`${name}[${index}]`} value={value} checked={checked} onChange={handleChange} />
          <label htmlFor={value}>{label}</label>
        </div>
      );
    });

    return (
      <div>
        <div>{checkboxes}</div>
        {touched && error && <p className="error">{error}</p>}
      </div>
    );
  };

  render() {
    return <Field {...this.props} type="checkbox" component={this.field} />;
  }
}
// export default CheckboxGroup;