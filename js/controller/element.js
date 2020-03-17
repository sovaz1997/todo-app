import Component from './component.js';

export default class Element {
  constructor(type, props, ...children) {
    this.type = type;
    this.props = props;
    this.children = children;


    if(type instanceof Component) {
      this.type = 'component';
      this.component = type;
    }
    if(arguments.length === 1) {
      this.type = 'text';
      this.text = type;
    }
  }

  createElement() {
    if(this.type === 'text') {
      return document.createElement('div') (this.text);
    }

    if(this.type === 'component') {
      return this.component.render();
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