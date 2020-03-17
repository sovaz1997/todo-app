import Controller from "./controller/controller.js";
import TodoItem from "./components/todo-item.js";

const app = new Controller(document.querySelector("#app"), new TodoItem);

