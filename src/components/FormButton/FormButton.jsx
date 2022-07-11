import React from 'react';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { createEmployeeAction, toggleModalAction } from '../../scripts/store';
import './FormButton.css';

/**
 * React component to create a form submit button
 * @param { {title: String} } props - title: button title text
 * @returns { React.ReactElement } FormButton component
 */
function FormButton(props) {
   const dispatch = useDispatch();

   return (
      <button
         className="form_button"
         onClick={(e) => {
            e.preventDefault();
            if (props.title === 'Save') {
               dispatch(createEmployeeAction());
            } else {
               dispatch(toggleModalAction());
            }
         }}
      >
         <h3 className="form_button_text">{props.title}</h3>
      </button>
   );
}

FormButton.propTypes = {
   title: propTypes.string.isRequired,
};

export default FormButton;
