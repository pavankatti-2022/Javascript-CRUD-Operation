
// Render Errors
const showError = (Err, msg) => {
  Err.innerText = msg;
  Err.classList.add('active')
}






const validate = (student) => {

  // Name Validation
  if(student.name === '') {
    const err = document.querySelector('#nameErr')
    showError(err, 'Invalid Name !');

    return false;
  }


  // Age Validation
  if(
    student.age === '' ||
    isNaN(Number(student.age)) ||
    student.age < 6 ||
    student.age > 17 ) {

    const err = document.querySelector('#ageErr');
    showError(err, 'Invalid Age !');

    return false;
  }
  

  
  
  // Gender Validation
  if(student.gender === null) {
    const err = document.querySelector('#gengerErr');
    showError(err, 'Please Select a Gender !');

    return false;
  }

  
  // Email Validation
  if(student.email === '') {
    return false;
  }


  return true;
}







export { validate }