import Component from "../controller/component.js";

export default class TodoItem extends Component {
  state = {
    important: false,
    done: false
  }

  constructor(props) {
    super(props);
  }
}