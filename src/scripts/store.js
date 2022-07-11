import { configureStore } from "@reduxjs/toolkit";


// --------------- STATE INITIALIZATION ---------------

const initialState = {
   isModalShowing: false
};


// --------------- ACTIONS ---------------

export function toggleModalAction() {
   return {
      type: "TOGGLE_MODAL_ACTION"
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
      case "TOGGLE_MODAL_ACTION": {
         return {
            ...state,
            isModalShowing: !state.isModalShowing
         }
      }
      default:
         return state
   }
}

export const store = configureStore({ reducer })