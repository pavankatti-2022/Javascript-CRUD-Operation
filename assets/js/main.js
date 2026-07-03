import { showForm, hideForm, handleSubmit, populateCourses } from "./functions.js"


const studentForm = document.querySelector("#studentForm")

const newStudentBtn = document.querySelector("#addBtn")
const closeForm = document.querySelector('.close')
const submitBtn = document.querySelector('#submitBtn')

// Populate Courses on DOM loaded
document.addEventListener("DOMContentLoaded", populateCourses)

// Show / Hide Form
newStudentBtn.addEventListener("click", showForm);
closeForm.addEventListener('click', hideForm);






studentForm.addEventListener("submit", handleSubmit)




