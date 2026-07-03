const validateStudent = (student) => {

  const errors = {}

  // Name Validation
  if(typeof(student.name) !== "string" || student.name.length <= 3) {
    errors.name = "Enter valid Name";    
  }

  // Age Validation
  if(isNaN(student.age) || student.age >= 18 || student.age < 8) {
    errors.age = "Enter valid Age"
  }


  return errors;
}


// Render Errors
const showErrors = (errors) => {
  for(let key in errors) {
    console.error(errors[key]);    
  }
}



export { validateStudent, showErrors }