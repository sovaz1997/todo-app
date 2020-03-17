import Component from '../controller/component.js';
import Element from '../controller/element.js';

export default class TodoItem extends Component {
  state = {
    important: false,
    done: false,
    text: ''
  }

  constructor(controller, ...props) {
    super(controller);

    this.state.text = props;
  }

  render() {
    this.setState({text: "!!!"});
    return new Element('p', {}, new Element(this.state.text));
  }
}