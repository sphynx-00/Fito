import { defaultUser } from "../../models/userModel";

export function saveUser(formData) {
  localStorage.setItem('user', JSON.stringify(formData));
}

export function loadUser() {
  const saved = JSON.parse(localStorage.getItem('user') || 'null');
  return saved || defaultUser;
}

export function saveUserProgram(programId, startDate) {
  // const userProgram = { programId, startDate };
  localStorage.setItem('userProgram', JSON.stringify({ programId, startDate }));
}

export function loadUserProgram() {
  const saved = JSON.parse(localStorage.getItem('userProgram') || 'null');
  return saved;
}

// export function saveProgram(selectedProgram) {
//   localStorage.setItem('program', JSON.stringify(selectedProgram));
// }

// export function loadProgram() {
//   return JSON.parse(localStorage.getItem('program'));
// }

export function profileManager(isEditing, setIsEditing) {
  const editMetrics = () => setIsEditing('metrics');
  const editProgram = () => setIsEditing('program');
  
  return {
    editMetrics,
    editProgram
  };
}