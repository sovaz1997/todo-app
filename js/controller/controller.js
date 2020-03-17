export default class Controller {
  constructor(selector, root) {
    this.selector = selector;
    this.root = root;
    this.rebuild();
  }

  rebuild() {
    this.selector.append(this.root.createElement());
  }
}