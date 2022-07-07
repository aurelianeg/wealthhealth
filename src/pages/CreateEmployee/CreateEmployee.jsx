import React from 'react';
import FormItem from '../../components/FormItem/FormItem';
import FormButton from '../../components/FormButton/FormButton';
import { states, departments } from '../../scripts/formSelectOptions';
import './CreateEmployee.css';

/**
 * React component to create the home page to create an employee
 * @returns { React.ReactElement } CreateEmployee page
 */
function CreateEmployee() {
   return (
      <main className="create_wrapper">
         <h2 className="create_title">- Create Employee -</h2>
         <form action="#" className="create_form">
            <div className="create_form_container">
               <FormItem
                  type="input"
                  id="firstName"
                  labelTitle="First Name"
                  inputType="text"
               />
               <FormItem
                  type="input"
                  id="lastName"
                  labelTitle="Last Name"
                  inputType="text"
               />
            </div>

            <div className="create_form_container">
               <FormItem
                  type="input"
                  id="dateOfBirth"
                  labelTitle="Date of Birth"
                  inputType="date"
               />
               <FormItem
                  type="input"
                  id="startDate"
                  labelTitle="Start Date"
                  inputType="date"
               />
            </div>

            <fieldset className="create_form_fieldset">
               <legend className="create_form_fieldset_legend">Address</legend>

               <div className="create_form_container">
                  <FormItem
                     type="input"
                     id="street"
                     labelTitle="Street"
                     inputType="text"
                  />
                  <FormItem
                     type="input"
                     id="city"
                     labelTitle="City"
                     inputType="text"
                  />
               </div>

               <div className="create_form_container create_form_container--bottom">
                  <FormItem
                     type="select"
                     id="state"
                     labelTitle="State"
                     selectOptions={states}
                  />
                  <FormItem
                     type="input"
                     id="zipCode"
                     labelTitle="ZIP Code"
                     inputType="text"
                  />
               </div>
            </fieldset>

            <FormItem
               type="select"
               id="department"
               labelTitle="Department"
               selectOptions={departments}
            />
         </form>

         <FormButton title="Save" />

         {/* !!!!!! CONFIRMATION MODAL */}
         {/* <div id="confirmation" class="modal">
            Employee Created!
         </div> */}
      </main>
   );
}

export default CreateEmployee;
