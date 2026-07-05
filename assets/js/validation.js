const validate = (student) => {

  // Name Validation
  if(student.name === '') {
    return false;
  }




  // Age Validation
  if(student.age === '' || isNaN(Number(student.age))) {
    return false;
  }

  if(student.age < 6 || student.age > 17) {
    return false;
  }


  // Gender Validation
  if(student.gender === null) {
    return false;
  }

  



  return true;
}


// Render Errors
const showErrors = (errors) => {
  for(let key in errors) {
    console.error(errors[key]);    
  }
}



export { validate, showErrors }