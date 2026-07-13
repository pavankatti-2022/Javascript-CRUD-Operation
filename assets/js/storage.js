import { showToast } from "./utils.js"



// Save Data in Local Storage
const saveData = (variable, data) => {
  localStorage.setItem(variable, JSON.stringify(data));
  showToast('Student Data Saved');
}


// Get Data From Local Storage
const getData = (variable) => {
  return JSON.parse(localStorage.getItem(variable))
}



// Reset Data in Local Storage
const resetData = () => {

  if(confirm('Are you sure you want to delete all Data !!!')) {
    localStorage.removeItem('studentList')    
  }
}


export { resetData, saveData, getData }