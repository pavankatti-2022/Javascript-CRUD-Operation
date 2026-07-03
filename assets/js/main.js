import { showForm, hideForm, handleSubmit, populateCourses, rendorData } from "./functions.js"

// FORM VARIABLES
const studentForm = document.querySelector("#studentForm")

const newStudentBtn = document.querySelector("#addBtn")
const closeForm = document.querySelector('.close')
const submitBtn = document.querySelector('#submitBtn')


// TABLE VARIABLES
// const table = document.querySelector('#table')

// Populate Courses on DOM loaded
document.addEventListener("DOMContentLoaded", populateCourses)

// Show / Hide Form
newStudentBtn.addEventListener("click", showForm);
closeForm.addEventListener('click', hideForm);



document.querySelector('#btn2').addEventListener('click', rendorData)




studentForm.addEventListener("submit", handleSubmit)






