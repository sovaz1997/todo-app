import Component from "../minireact/component";

export default class TodoItem extends Component {
  state = {
    important: false,
  }

  constructor(app, props) {
    super(app, props);
  }
}