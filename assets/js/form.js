import { showToast, generateId } from "./utils.js";
import { validate } from "./validation.js";


// console.log();


// Handle Form Submit Function
const handleSubmit = (e) => {
  e.preventDefault();

  // Get Data from local Storage
  let students =  JSON.parse(localStorage.getItem("studentList")) || [];
  

  const formData = new FormData(studentForm);
  
  const student = {
    id: generateId(),
    name: formData.get("name"),
    age: Number(formData.get("age")),
    gender: formData.get("gender"),
    email: formData.get("email"),
    course: formData.get("course")
  }

  const isValid = validate(student)

  // console.log(isValid);
  

  if(isValid) {
    
    // Save in Database
    students.push(student)
    
    // Update in Local Storage
    localStorage.setItem("studentList", JSON.stringify(students))
  
    showToast("Student added Successfully")
  }


}


export { handleSubmit }