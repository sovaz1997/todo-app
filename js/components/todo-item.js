import Component from '../controller/component.js';
import Element from '../controller/element.js';

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
    return new Element('p', {}, new Element(this.state.text));
  }
}