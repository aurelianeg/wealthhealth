import React, { useState } from 'react';
import propTypes from 'prop-types';
import './SelectInput.css';

/**
 * React component to create a custom select
 * @returns { React.ReactElement } SelectInput component
 */
function SelectInput(props) {
   // If the array of options has objects with abbreviations, get only the name
   // as title and only the abbreviation as value (saved in Redux).
   // This allows to have only a simple array as options too.

   const [isListExpanded, setListExpanded] = useState(false);
   const [selectedOptionTitle, setSelectedOptionTitle] = useState(
      props.abbreviations ? props.options[0].name : props.options[0]
   );
   const [selectedOptionValue, setSelectedOptionValue] = useState(
      props.abbreviations ? props.options[0].abbreviation : props.options[0]
   );
   const [optionTabIndex, setOptionTabIndex] = useState('-1');

   return (
      <div className="select_wrapper">
         <button
            type="button"
            className={
               isListExpanded
                  ? 'select_button select_button--expanded'
                  : 'select_button'
            }
            // If clicked, show the options list and allow selection with keyboard
            onClick={() => {
               setListExpanded(!isListExpanded);
               setOptionTabIndex(optionTabIndex === -1 ? 0 : -1);
            }}
         >
            <p
               className="select_button_text"
               id={props.id}
               // Create an attribute "value" to easily get the wanted string
               value={selectedOptionValue}
            >
               {selectedOptionTitle}
            </p>
            <span className="select_button_icon"></span>
         </button>

         <div
            className="select_list_wrapper"
            role="listbox"
            aria-expanded={isListExpanded}
         >
            <ul className="select_list">
               {props.options.map((option) => (
                  // Create a list element for each option in array
                  <li
                     className="select_list_choice"
                     key={props.abbreviations ? option.name : option}
                     role="option"
                     aria-selected={
                        selectedOptionTitle ===
                        (props.abbreviations ? option.name : option)
                     }
                     tabIndex={optionTabIndex}
                     // If clicked, set title and value and hide the options list
                     onClick={() => {
                        setSelectedOptionTitle(
                           props.abbreviations ? option.name : option
                        );
                        setSelectedOptionValue(
                           props.abbreviations ? option.abbreviation : option
                        );
                        setListExpanded(!isListExpanded);
                     }}
                  >
                     {props.abbreviations ? option.name : option}
                  </li>
               ))}
            </ul>
         </div>
      </div>
   );
}

SelectInput.propTypes = {
   id: propTypes.string.isRequired,
   options: propTypes.array.isRequired,
   abbreviations: propTypes.bool.isRequired,
};

export default SelectInput;
