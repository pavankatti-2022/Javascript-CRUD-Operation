import { showToast } from "./utils.js"



const resetData = () => {

  const confirmation = confirm('Are you sure you want to delete all Data !!!')

  if(confirmation) {
    localStorage.removeItem('studentList')
    showToast('Data Deleted Successfully !')
  }
  
}


export { resetData }