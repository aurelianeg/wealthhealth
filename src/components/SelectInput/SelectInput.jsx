import React, { useState } from 'react';
import propTypes from 'prop-types';
import './SelectInput.css';

/**
 * React component to create a custom select
 * @returns { React.ReactElement } SelectInput component
 */
function SelectInput(props) {
   const [isListExpanded, setListExpanded] = useState(false);
   const [selectedOption, setSelectedOption] = useState(props.options[0].name);
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
            onClick={() => {
               setListExpanded(!isListExpanded);
               setOptionTabIndex(optionTabIndex === -1 ? 0 : -1);
            }}
         >
            <p className="select_button_text">{selectedOption}</p>
            <span className="select_button_icon"></span>
         </button>
         <div
            className="select_list_wrapper"
            role="listbox"
            aria-expanded={isListExpanded}
         >
            <ul className="select_list">
               {props.options.map((option, index) => (
                  <li
                     className="select_list_choice"
                     key={index}
                     id={option.abbreviation}
                     role="option"
                     aria-selected={selectedOption === index}
                     tabIndex={optionTabIndex}
                     // When option clicked, set as the selected option and close the select after
                     onClick={() => {
                        setSelectedOption(option.name);
                        setListExpanded(!isListExpanded);
                     }}
                  >
                     {option.name}
                  </li>
               ))}
            </ul>
         </div>
      </div>
   );
}

SelectInput.propTypes = {
   name: propTypes.string.isRequired,
   id: propTypes.string.isRequired,
   options: propTypes.array.isRequired,
};

export default SelectInput;
