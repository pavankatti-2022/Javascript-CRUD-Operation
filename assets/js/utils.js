// Show Form
const showItem = (item) => item.classList.add('active')


// Hide Form
const hideItem = (e, item) => {
  e.stopPropagation();
  item.classList.remove('active')
}


// Toast Notification
const showToast = (message) => {

  // Select Body
  const body = document.querySelector('body');

  const toast = document.createElement('div')
  toast.setAttribute("class", "toast")  
  toast.innerText = message

  body.appendChild(toast)


  setTimeout(() => {
    toast.classList.add('hide')

    setTimeout(() => {
      toast.remove()
    }, 300)

  }, 5000)

}



// Generate Id
const generateId = () => {
  let students = JSON.parse(localStorage.getItem("studentList"))

  if(students === null) {
    return 1;
  } else {
    let id = students.length + 1;  
    return id;
  }

}





export { showItem, hideItem, showToast, generateId }