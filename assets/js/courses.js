
  const courseList = [
    "class 1",
    "class 2",
    "class 3",
    "class 4",
    "class 5",
    "class 6",
    "class 7",
    "class 8",
    "class 9",
    "class 10"
  ]


// // Populate Course List
// const populateCourses = (list) => {

//   // Select "select element"
//   const courses = document.querySelector("[name='course']");

//   list.forEach((course) => {
  
  //     const option = document.createElement('option')
  
  //     option.innerText = course;
  //     option.value = course;
  
  //     courses.append(option)
  //   })  
  // }
  



  
const populateCourses = (list) => {
  const courses = document.querySelector("[name='course']");  // <select> element
  const options = list.map(item => `<option value="${item}">${item}</option>`).join('');
  courses.innerHTML = options;
}


export { courseList, populateCourses }