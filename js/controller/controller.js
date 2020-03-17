export default class Controller {
  constructor(selector) {
    this.selector = selector;
  }

  rebuild() {
    this.selector.innerHTML = '';
    const el = this.root.createElement(this.root.type);
    this.selector.innerHTML = el.innerHTML;
  }

  setRoot(root) {
    this.root = root;
    this.rebuild();
  }
}