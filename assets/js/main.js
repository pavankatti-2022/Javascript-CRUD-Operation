
import { initEvents } from "./events.js";
import { loadStudents } from "./table.js";


function initializeApp() {
  loadStudents();
  initEvents();
}

initializeApp();