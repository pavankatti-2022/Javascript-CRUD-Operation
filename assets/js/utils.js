// Show Form
const showForm = () => studentForm.classList.add('active')


// Hide Form
const hideForm = (e) => {
  e.stopPropagation();
  studentForm.classList.remove('active')
}


export { showForm, hideForm }