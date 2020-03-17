import Controller from "./controller/controller.js";
//import TodoItem from "./components/todo-item.js";
import Element from "./controller/element.js";

const app = new Controller(document.querySelector("#app"), new Element(
  'div',
  {'class': 'test'},
  new Element('!!!')
));


