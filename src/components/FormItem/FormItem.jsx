import React from 'react';
import propTypes from 'prop-types';
import SelectInput from '../SelectInput/SelectInput';
import './FormItem.css';

/**
 * React component to create a form item with an input or a select
 * @returns { React.ReactElement } FormItem component
 */
function FormItem(props) {
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
            <SelectInput
               id={props.id}
               options={props.selectOptions}
               abbreviations={props.selectAbbreviations}
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
   selectAbbreviations: propTypes.bool,
};

export default FormItem;
