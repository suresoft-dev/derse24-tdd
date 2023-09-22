const template = document.createElement("template");
template.innerHTML = `
<style>
  .avatar__box {
    display: flex;
    place-content: center;
  }

  .avatar__img {
    display: block;
    width: 150px;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    overflow: hidden;
  }
</style>
<div class="avatar__box">
<img class="avatar__img" src="" />
<slot />
</div>
`

class Avatar extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({mode: "open"});
    shadowRoot.appendChild(template.content.cloneNode(true));
    const img = this.shadowRoot.querySelector("img");
    img.setAttribute("src", this.getAttribute("src"));
  }
}

window.customElements.define("avatar-img", Avatar);
