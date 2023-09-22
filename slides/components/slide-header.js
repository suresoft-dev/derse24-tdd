import { component } from "./component.js";

const template = document.createElement("template");
template.innerHTML = `
  <style>
    .slide-header-wrapper {
        display: flex;
        width: 100%;
        justify-content: center;
        margin-bottom: 2rem;
        padding: 0;
    }

    .slide-header {
        display: block;
        position: relative;
        width: fit-content;
        text-align: center;
        margin: 0;
        padding: 0;
    }

    .slide-header::after {
      content: "";
      position: absolute;
      left: 0;
      top: 1.2em;
      width: 2.75ch;
      height: .12em;
      border-radius: 5px;
      background-color: var(--suresoft-orange);
    }
  </style>

  <div class="slide-header-wrapper">
    <h2 class="slide-header"><slot /></h2>
  </div>
`;


window.customElements.define("slide-header", component(template));
