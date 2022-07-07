import React from 'react';
import Select from 'react-select';
import propTypes from 'prop-types';
import './FormItem.css';

/**
 * React component to create a form item with an input or a select
 * @returns { React.ReactElement } FormItem component
 */
function FormItem(props) {
   const options = [];
   if (props.selectOptions) {
      for (let i = 0; i < props.selectOptions.length; i++) {
         let option = props.selectOptions[i];
         options.push({ value: option.abbreviation, label: option.name });
      }
   }

   return (
      <div className="form_item">
         <label className="form_label" htmlFor={props.id}>
            {props.labelTitle}
         </label>
         {props.type === 'input' ? (
            <input
               className="form_input"
               type={props.inputType}
               id={props.id}
               required
            />
         ) : (
            <Select
               className="form_select"
               name={props.id}
               id={props.id}
               options={options}
               required
            />
         )}
      </div>
   );
}

FormItem.propTypes = {
   type: propTypes.string.isRequired,
   id: propTypes.string.isRequired,
   labelTitle: propTypes.string.isRequired,
   inputType: propTypes.string,
   selectOptions: propTypes.array,
};

export default FormItem;
