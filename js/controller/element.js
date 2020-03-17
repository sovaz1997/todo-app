export default class Element {
  constructor(type, props, ...children) {
    this.type = type;
    this.props = props;
    this.children = children;
    
    if(arguments.length === 1) {
      this.type = 'text';
      this.text = type;
    }
  }

  createElement() {
    if(this.type === 'text') {
      return document.createTextNode(this.text);
    }

    const el = document.createElement(this.type);

    if(this.children) {
      this.children.forEach(
        child => el.append(child.createElement())
      );
    }

    return el;
  }
}