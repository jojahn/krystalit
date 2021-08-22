import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('nav-bar')
export class NavBar extends LitElement {
	static styles = css`nav {
		width: 100vw;
		height: 50px;
		top: 0;
		left: 0;
		position: fixed;
		color: blue;
		display: block;
		background-color: #36f;
		z-index: 999;
	}`;

	@property()
	name = 'Somebody';

	render() {
		return html`<nav>
      <ul></ul>
    </nav>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"nav-bar": NavBar,
	}
}