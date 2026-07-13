import { tbody } from "./dom.js";


// Show Data in Tables
const loadStudents = () => {

  const students = JSON.parse(localStorage.getItem('studentList')) || [];

  let rows = "";

  /*
    By using index + 1 inside loadStudents, your table will always 
    re-index itself perfectly as 1, 2, 3... no matter how many students 
    you add or delete!
  */

  students.forEach((student, index) => {

    rows += `
    <tr data-id="${student.id}">
        <td name="sl">${index + 1}</td>
        <td name="name">${student.name}</td>
        <td name="age">${student.age}</td>
        <td name="gender">${student.gender}</td>
        <td name="email">${student.email}</td>
        <td name="course">${student.course}</td>
        <td>${`
          <div class="actions">
            <i class="bi bi-eye view"></i>
            <i class="bi bi-pencil-square edit"></i>
            <i class="bi bi-trash delete"></i>
          </div>  
        `}</td>
      </tr>
    `
  })

  tbody.innerHTML = rows;

}




// Delete Student Functionality








export { loadStudents }