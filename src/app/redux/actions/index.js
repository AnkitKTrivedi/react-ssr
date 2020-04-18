import { SET_CURRENT_CONTACT } from "../actionTypes";

export function addContact(payload) {
  return { type: SET_CURRENT_CONTACT, payload };
}
