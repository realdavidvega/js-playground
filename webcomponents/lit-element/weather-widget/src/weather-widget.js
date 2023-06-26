import { LitElement, html } from 'lit-element';

export class WeatherWidget extends LitElement {
  render() {
    return html`
      <div>Weather widget title</div>
    `;
  }
}

customElements.define('weather-widget', WeatherWidget);
