export default class Component {
  constructor() {
    this.childs = []
    this.state = {}
    this.props = {}
  }

  setState(state) {
    for (key in state.keys()) {
      this.state[key] = state[key];
    }

    this.componentDidUpdated();
  }

  componentDidUpdated() {
    this.controller.rebuild();
  }

  setController(controller) {
    this.controller = controller;
  }

  render() {
    return '';
  }
}