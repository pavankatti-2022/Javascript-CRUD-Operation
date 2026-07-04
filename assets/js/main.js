import { rendorData } from "./functions.js"

import { courseList, populateCourses } from "./courses.js";
import { showForm, hideForm } from "./utils.js";
import { handleSubmit } from "./form.js";
import { resetData } from "./storage.js";



// Select Form
const studentForm = document.querySelector("#studentForm")


// Select Buttons
const addStudentBtn = document.querySelector("#addBtn"),
      submitBtn = document.querySelector('#submitBtn'),
      closeBtn = document.querySelector('.close'),
      resetBtn = document.querySelector('#delBtn')




// Populate Courses on DOM loaded
document.addEventListener("DOMContentLoaded", () => {
  populateCourses(courseList)
})





// Show / Hide Form
addStudentBtn.addEventListener("click", showForm);
closeBtn.addEventListener('click', hideForm);





// Add New Syudent on form Submit
studentForm.addEventListener("submit", handleSubmit)

// Show all Data
document.querySelector('#btn2').addEventListener('click', rendorData)

// Reset Data
resetBtn.addEventListener('click', resetData)
