export default class Component {
  constructor(controller) {
    this.childs = []
    this.state = {}
    this.props = {}
    this.setController(controller);
  }

  setState(state) {
    let updated = false;

    for (let key in state) {
      if(this.state[key] !== state[key]) {
        this.state[key] = state[key];
        updated = true;
      }
    }

    if(updated) {
      this.componentDidUpdated();
    }
  }

  componentDidUpdated() {
    this.controller.rebuild();
  }

  componentDidMounted() {
    if(controller) {
      this.setController(controller);
    }
  }

  setController(controller) {
    this.controller = controller;
  }

  render() {
    return '';
  }
}