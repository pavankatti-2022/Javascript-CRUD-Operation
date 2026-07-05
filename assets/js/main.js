import { rendorData } from "./table.js"

import { courseList, populateCourses } from "./courses.js";
import { showItem, hideItem, showToast } from "./utils.js";
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
addStudentBtn.addEventListener("click", () => {
  showItem(studentForm)
});

closeBtn.addEventListener('click', (e) => {
  hideItem(e, studentForm)
});





// Add New Student on form Submit
studentForm.addEventListener("submit", handleSubmit)

// Show all Data
document.querySelector('#btn2').addEventListener('click', rendorData)

// Reset Data
resetBtn.addEventListener('click', resetData)
