import Component from "../controller/component.js";

export default class TodoItem extends Component {
  state = {
    important: false,
    done: false,
    text: ''
  }

  constructor(props) {
    super();

    this.state.text = props;
  }

  render() {
    return `<p>${this.state.text}</p>`;
  }
}