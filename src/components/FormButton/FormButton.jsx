import React from 'react';
import propTypes from 'prop-types';
import './FormButton.css';

/**
 * React component to create a form submit button
 * @returns { React.ReactElement } FormButton component
 */
function FormButton(props) {
   return (
      <button className="form_button" /*onClick="saveEmployee()"*/>
         <h3 className="form_button_text">{props.title}</h3>
      </button>
   );
}

FormButton.propTypes = {
   title: propTypes.string.isRequired,
};

export default FormButton;
