import { SET_CURRENT_CONTACT } from "../actionTypes";

const initialState = {
  currentContact: {}
};

function rootReducer(state = initialState, action) {
  console.log("action==========>", action);
  switch (action.type) {
    case SET_CURRENT_CONTACT:
      console.log("action.contactDetails", action.payload);
      state.currentContact = action.payload;
      return state;

    default:
      return state;
  }
}

export default rootReducer;
