
// Form Selected
const form = document.querySelector("#studentForm")

// Table Body
const tbody = document.querySelector('#table tbody')


// All Buttons selected
const buttons = {
  addStudentBtn: document.querySelector("#addBtn"),
  submitBtn: document.querySelector('#submitBtn'),
  closeBtn: document.querySelector('.close'),
  delAllBtn: document.querySelector('#delBtn'),
  clearBtn: document.querySelector('#clearBtn')
}


// Form UI
const formUI = {
  title: form.querySelector('.form-title'),
  id: form.querySelector('.form-title'),
  name: form.querySelector("[name='name']"),
  age: form.querySelector("[name='age']"),
  gender: form.querySelector("[name='gender']"),
  email: form.querySelector("[name='email']"),
  course: form.querySelector("[name='course']"),
  submitBtn: form.querySelector("[name='submit']")
}


export { form, buttons, tbody }