import { defaultUser } from "../../models/userModel";

export function saveUser() {
  localStorage.setItem('user', JSON.stringify(defaultUser));
}

export function loadUser() {
  return JSON.parse(localStorage.getItem('user'));
}