import React from 'react';
import propTypes from 'prop-types';
import Select from '@aurelianeg/react-select';
import './FormItem.css';

/**
 * React component to create a form item with an input or a select
 * @param { {type: String, id: String, labelTitle: String, inputType: String, selectOptions: Array, selectAbbreviations: Boolean} } props - type: 'input' or 'select', id: input id, labelTitle: label text, inputType: "date", "text", etc., selectOptions: array of options, selectAbbreviations: true if options are objects with name and abbreviation properties / false if option array is simple
 * @returns { React.ReactElement } FormItem component
 */
function FormItem(props) {
   return (
      <div className="form_item">
         <label className="form_label" htmlFor={props.id}>
            {props.labelTitle}
         </label>
         <div className="form_input_message_wrapper">
            {props.type === 'input' ? (
               <input
                  className="form_input"
                  type={props.inputType}
                  id={props.id}
                  required
               />
            ) : (
               <Select
                  id={props.id}
                  options={props.selectOptions}
                  abbreviations={props.selectAbbreviations}
               />
            )}
            <span className="form_error_message">
               Please fill out this field.
            </span>
         </div>
      </div>
   );
}

FormItem.propTypes = {
   type: propTypes.string.isRequired,
   id: propTypes.string.isRequired,
   labelTitle: propTypes.string.isRequired,
   inputType: propTypes.string,
   selectOptions: propTypes.array,
   selectAbbreviations: propTypes.bool,
};

export default FormItem;
