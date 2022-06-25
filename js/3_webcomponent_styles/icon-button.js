import sheet from './icon-button.css' assert { type: 'css' };

export class IconButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
    
  get icon() {
    return this.getAttribute('icon');
  }

  set icon(newIcon) {
    this.setAttribute('icon', newIcon);
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <div id="container">
        <button part="button">
          <span part="icon">${this.icon}</span>
          <span part="text"><slot></slot></span>
        </button>
      </div>
   `;
    this.shadowRoot.adoptedStyleSheets = [sheet];
  }
}

customElements.define("icon-button", IconButton);