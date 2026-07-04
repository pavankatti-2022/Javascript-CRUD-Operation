
import { validateStudent, showErrors } from "./validation.js"




const tbody = document.querySelector('#table tbody')















// Show Data in Tables
const rendorData = () => {

  const students = JSON.parse(localStorage.getItem("studentList"))
  
  let rows = "";
  const img = document.createElement('img')
  
  students.forEach(student => {

    rows += `
      <tr>
        <td>${student.id}</td>
        <td>${student.name}</td>
        <td>${student.age}</td>
        <td>${student.gender}</td>
        <td>${student.email}</td>
        <td>${student.course}</td>
        <td>${`
          <div class="actions">
            <i class="bi bi-eye"></i>
            <i class="bi bi-pencil-square"></i>
            <i class="bi bi-trash"></i>
          </div>  
        `}</td>
      </tr>
    `    
  })
  
  tbody.innerHTML = rows;

}








export { rendorData }