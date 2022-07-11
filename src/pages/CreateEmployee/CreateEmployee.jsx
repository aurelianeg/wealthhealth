import React from 'react';
import { useSelector } from 'react-redux';
import FormItem from '../../components/FormItem/FormItem';
import FormButton from '../../components/FormButton/FormButton';
import { states, departments } from '../../scripts/formSelectOptions';
import Modal from 'react-modal';
import './CreateEmployee.css';

/**
 * React component to create the home page to create an employee
 * @returns { React.ReactElement } CreateEmployee page
 */
function CreateEmployee() {
   const isModalShowing = useSelector((state) => state.isModalShowing);

   Modal.setAppElement('#root');

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
                     selectAbbreviations={true}
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
               selectAbbreviations={false}
            />
         </form>

         <FormButton title="Save" />

         {/* CONFIRMATION MODAL: only opened if isModalShowing is true*/}
         <Modal
            className="modal"
            isOpen={isModalShowing}
            contentLabel="Employee created modal"
         >
            <h2 className="modal_title">Employee Created!</h2>
            <FormButton title="Close" />
         </Modal>
      </main>
   );
}

export default CreateEmployee;
