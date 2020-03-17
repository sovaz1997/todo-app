import Component from './component.js';

export default class Element {
  constructor(type, props, ...children) {
    this.props = props;
    this.children = children;
    this.type = type;


    if(type instanceof Component) {
      this.component = type;
      this.type = 'component';
    } else if(arguments.length === 1) {
      this.type = 'text';
      this.text = type;
    }
  }

  createElement() {
    if(this.type === 'text') {
      return document.createTextNode(this.text);
    }

    if(this.type === 'component') {
      return this.component.render().createElement();
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