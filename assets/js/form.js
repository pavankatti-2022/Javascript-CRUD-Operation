
// Handle Form Submit Function
const handleSubmit = (e) => {
  e.preventDefault();

  // Get Data from local Storage
  let students =  JSON.parse(localStorage.getItem("studentList")) || [];
  

  const formData = new FormData(studentForm);
  
  const student = {
    name: formData.get("name"),
    age: Number(formData.get("age")),
    gender: formData.get("gender"),
    email: formData.get("email"),
    course: formData.get("course")
  }


  // Save in Database
  students.push(student)
  

  // Update in Local Storage
  localStorage.setItem("studentList", JSON.stringify(students))
}


export { handleSubmit }