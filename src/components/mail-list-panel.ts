import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('mail-list-panel')
export class MailListPanel extends LitElement {
	static styles = css`:host {
		width: 15%;
		height: 100%;
		display: block;
		background-color: #eee;
	}`;

	@property()
	name = 'Somebody';

	render() {
		return html`<div></div>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"mail-list-panel": MailListPanel,
	}
}