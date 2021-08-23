import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('mail-list-panel')
export class MailListPanel extends LitElement {
	static styles = css`:host {
		width: 15%;
		height: 100%;
		display: block;
		background-color: #333;
		color: white;
		padding-top: 10px;
	}

	ul {
		margin: 0;
		padding: 0;
		list-style-type: none;
	}

	.email {
		padding: 10px;
		cursor: pointer;
		border: none;
		border-radius: 0.2rem;
		transition: 0.25s;
	}

	.email:hover {
		background-color: #222;
	}

	.email h1 {
		font-size: 1.4rem;
		font-weight: lighter;
		margin: 0;
		padding: 0;
		margin: 5px;
	}

	.email p {
		font-size: 0.7rem;
		font-weight: lighter;
		margin: 0;
		padding: 0;
		margin: 5px;
	}

	.email h2 {
		font-size: 0.8rem;
		font-weight: lighter;
		margin: 0;
		padding: 0;
		margin: 5px;
	}
	`;

	@property()
	name = 'Somebody';

	render() {
		return html`<ul>
			<li class="email">
				<h1>Hello, World!</h1>
				<h2>Server@Localhost - 03/28/2021</h2>
				<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut l ...</p>
			</li>
		</ul>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"mail-list-panel": MailListPanel,
	}
}