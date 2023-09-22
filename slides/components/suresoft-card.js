import { component } from "./component.js";

const template = document.createElement("template");
template.innerHTML = `
  <div>
    <style>
      .suresoft-card {
        background-color: var(--suresoft-medium-blue) !important;
        border-radius: 8px;
        padding: 1rem;

        margin: auto;
        width: 60%;
        position: relative;
      }

      .suresoft-card::after {
        position: absolute;
        content: "";
        z-index: -1;

        background-color: var(--suresoft-dark-blue) !important;
        border-radius: 0 0 8px 8px;
        width: 100%;
        height: 20px;
        left: 0;
        bottom: -5px;
      }

      .suresoft-card > h2 {
        color: white !important;
        padding: 0;
        margin: 0;
      }
    </style>

    <div class="suresoft-card">
      <h2><slot /></h2>
    </div>
  </div>
`

window.customElements.define("suresoft-card", component(template));
