import { tbody } from "./dom.js";



// Show Item
const showItem = (item) => item.classList.add('active')


// Hide Item
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
// const generateSlNo = () => {

//   console.log(tbody.children.length);
  
  

// }






export { showItem, hideItem, showToast }