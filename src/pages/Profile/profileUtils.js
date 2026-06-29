import { defaultUser } from "../../models/userModel";

export function saveUser(formData) {
  localStorage.setItem('user', JSON.stringify(formData));
}

export function loadUser() {
  const saved = JSON.parse(localStorage.getItem('user') || 'null');
  return saved || defaultUser;
}

export function profileManager(isEditing, setIsEditing) {
  const editMetrics = () => setIsEditing('metrics');
  const editProgram = () => setIsEditing('program');
  


  return {
    editMetrics,
    editProgram
  };
}