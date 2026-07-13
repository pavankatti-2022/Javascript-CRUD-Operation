import { form } from "./dom.js";
import { showToast } from "./utils.js";
import { validate } from "./validation.js";
import { loadStudents } from "./table.js";






// Handle Form Submit Function
const handleSubmit = (e) => {
  e.preventDefault();
  
  // Get Data from local Storage
  let students = JSON.parse(localStorage.getItem('studentList')) || [];
  
  const formData = new FormData(studentForm);
  
  const student = {
    // slNo: generateSlNo(),
    id: Date.now(),
    name: formData.get("name"),
    age: Number(formData.get("age")),
    gender: formData.get("gender"),
    email: formData.get("email"),
    course: formData.get("course")
  }
  
  const isValid = validate(student);
  
  if(isValid) {
    
    // Save in Database
    students.push(student)
    
    // Update in Local Storage
    localStorage.setItem('studentList', JSON.stringify(students))

    // Load All Students from local Storage
    loadStudents();

    // Show Toast Notification
    showToast("New Student added successfully!")
  }  
}




// Hide Errors
const hideError = () => {
  const errs = document.querySelectorAll('.err')

  errs.forEach(err => {
    err.classList.remove('active')
  })
}


export { handleSubmit, hideError }