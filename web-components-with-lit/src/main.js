import { html, LitElement } from 'lit';

class LearnLit extends LitElement {

    static properties = {
        count: {type: Number}
    }

    constructor() {
        super();
        this.count = 0;
    }

  render() {
    return html`
        <p>The count is ${this.count}</p>
        <button @click=${() => this.count++}>click me!</button>
        `;
  }
}

customElements.define('learn-lit', LearnLit);