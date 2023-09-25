import { component } from "./component.js";

const template = document.createElement("template");
template.innerHTML = `
<style>
  .infobox__wrapper {
    position: relative;
    border-left: 6px solid var(--suresoft-medium-blue);
    border-radius: 12px;
    box-shadow: 1px 2px 2px 0px rgb(0, 0, 0, 0.2);
  }

  .infobox__inner {
    border-radius: 8px;
    padding: 2rem;
  }
</style>
<div class="infobox__wrapper">
  <div class="infobox__inner">
    <slot />
  </div>
</div>
`

window.customElements.define("info-box", component(template));
