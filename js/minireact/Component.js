export default class Component {
  constructor(app, props) {
    this.app = app.slice();
    this.props = props.slice();
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
    this.app.rebuild();
  }
}