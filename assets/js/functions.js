
import { validateStudent, showErrors } from "./validation.js"

// Get Data from local Storage
let students =  JSON.parse(localStorage.getItem("studentList")) || [];


// Show Form
const showForm = () => studentForm.classList.add('active')

// Hide Form
const hideForm = (e) => {
  e.stopPropagation();
  studentForm.classList.remove('active')
}






// Handle Form Submit Function
const handleSubmit = (e) => {
  e.preventDefault();
  
  const formData = new FormData(studentForm);
  
  const student = {
    name: formData.get("name"),
    age: Number(formData.get("age")),
    gender: formData.get("gender"),
    email: formData.get("email"),
    course: formData.get("course")
  }


  const errors = validateStudent(student)

  if(Object.keys(errors).length > 0) {
    showErrors(errors)
    return;
  }

  // Save in Database
  students.push(student)

  localStorage.setItem("studentList", JSON.stringify(students))
}


// Populate Course List
const populateCourses = () => {

  // Select "select element"
  const courses = document.querySelector("[name='course']");

  const courseList = [
    "class 1",
    "class 2",
    "class 3",
    "class 4",
    "class 5",
    "class 6",
    "class 7",
    "class 8",
    "class 9",
    "class 10"
  ]


  let options = courseList.map((course) => {

    const option = document.createElement('option')
    option.innerText = course;
    option.value = course;

    console.log(option);
    
  }).join('');

  courses.append(options)

  console.log(courses);
  
  
}






export { showForm, hideForm, handleSubmit, populateCourses }