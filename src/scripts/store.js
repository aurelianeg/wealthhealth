import { configureStore } from "@reduxjs/toolkit";


// --------------- STATE INITIALIZATION ---------------

const initialState = {
   employees: ''
};


// --------------- ACTIONS ---------------

export function createEmployeeAction() {
   return {
      type: "CREATE_EMPLOYEE_ACTION"
   }
}


// --------------- REDUCER ---------------

/**
 * Reducer function (Redux)
 * @param { Array } state - Global state
 * @param { Object } action - Action
 * @returns { Array } Updated global state
 */
function reducer(state = initialState, action) {
   switch (action.type) {
      case "CREATE_EMPLOYEE_ACTION": {
         return {
            ...state,
            employees: 'yeah'
         }
      }
      default:
         return state
   }
}

export const store = configureStore({ reducer })