export function component(templateElement) {
  return class extends HTMLElement {
    constructor() {
      super();
      const shadowRoot = this.attachShadow({mode: "open"});
      shadowRoot.appendChild(templateElement.content.cloneNode(true));
    }
  }
}
