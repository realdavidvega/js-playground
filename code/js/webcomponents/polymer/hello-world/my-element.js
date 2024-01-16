import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-checkbox/paper-checkbox.js'
/**
 * `my-element`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class MyElement extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
      <paper-checkbox>Ready to deploy</paper-checkbox>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'my-element',
      },
    };
  }
}

window.customElements.define('my-element', MyElement);
