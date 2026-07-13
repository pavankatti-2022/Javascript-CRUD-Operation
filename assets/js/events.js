import { tbody, form, buttons } from "./dom.js";
import { courseList, populateCourses } from "./courses.js"
import { showItem, hideItem, showToast } from "./utils.js";
import { handleSubmit, hideError } from "./form.js";
import { loadStudents } from "./table.js";
import { resetData } from "./storage.js";


function initEvents() {

  // Add New Student
  buttons.addStudentBtn.addEventListener("click", () => {
    showItem(form)

    // Populate Course List
    populateCourses(courseList)
  });
}


// Hide Form
buttons.closeBtn.addEventListener('click', (e) => {
  hideItem(e, form)
});


// Clear Form
buttons.clearBtn.addEventListener('click', () => {
  form.reset()
  hideError()
})





// Add New Student on form Submit
form.addEventListener("submit", handleSubmit)







// Reset Data
buttons.delAllBtn.addEventListener('click', (e) => {

  // Stop clicking on its parent element
  e.stopPropagation();

  // Reset Data
  resetData();

  loadStudents();
  
  // Show Toast Notification
  showToast('All Student Data deleted !');
})





// Delete Event Functionality
tbody.addEventListener('click', (e) => {

  if (e.target.classList.contains("delete")) {

    const row = e.target.closest('tr');

    // 1. Grab the ID from data attribute of the clicked row
    // Since you used data-id="id", we can target it using getAttribute
    const studentId = parseInt(row.getAttribute('data-id'))

    // 2. Fetch the current student list
    let students = JSON.parse(localStorage.getItem('studentList'))


    // 3. Confirm with the user before wiping the data
    if (confirm("Are you sure you want to delete this student ?")) {


      // 4. Filter out the student with the matching ID
      // (Using != instead of !== handles string/number comparisons cleanly if IDs are stored as strings)
      students = students.filter(student => {
        return student.id !== studentId;
      })


      // 5. Save the updated array back to your storage
      localStorage.setItem('studentList', JSON.stringify(students))

      // 6. Load All students from Local Storage
      loadStudents();

      // 7. Display Toast Notification
      showToast("Student Deleted successfully!");
    }
  }
})





// Edit Event Functionality
tbody.addEventListener('click', (e) => {

  if(e.target.classList.contains('edit')) {

    populateCourses(courseList)

    // 1. Grab selected row
    let row = e.target.closest('tr')
    
    // 2. Grab Id of selected row
    const studentId = parseInt(row.getAttribute('data-id'))
    
    // 3. Get the student List from Local Storage
    let students = JSON.parse(localStorage.getItem('studentList'))

    // 4. Student whose data need to be updated
    let student = students.filter(student => student.id === studentId)


    // 5. Change Form Title
    const formTitle = form.querySelector('.form-title')
    formTitle.textContent = "Edit Student";


    // Look for existing inserted para and remove it
    const existingId = form.querySelector("form .inserted-para")

    if(existingId) existingId.remove();

    const p = `<p class="inserted-para">Student Id : ${studentId}</p>`;
    formTitle.insertAdjacentHTML("afterend", p)

    const button = form.querySelector('form [name="submit"]');
    button.textContent = "Update Student";

    form.querySelector('[name="name"]').value = student[0].name;
    form.querySelector('[name="age"]').value = student[0].age;
    form.querySelector(`[name="gender"][value="${student[0].gender}"]`).checked = true;
    form.querySelector('[name="email"]').value = student[0].email;
    form.querySelector('[name="course"]').value = student[0].course;


    // 6. Display Form
    showItem(form)

    

  }
})




// View Student Functionality
tbody.addEventListener('click', (e) => {
  if(e.target.classList.contains("view")) {

    // 1. Grab selected row
    const row = e.target.closest("tr");

    // 2. Grab Id of selected row
    const studentId = parseInt(row.getAttribute('data-id'))

    // 3. Get the student List from Local Storage
    let students = JSON.parse(localStorage.getItem('studentList'))

    // 4. Student whose data need to be viewed
    let student = students.filter(student => student.id === studentId)

    /*
      Coding will be continued in next commit :-)
    */
  }  
})







export { initEvents }