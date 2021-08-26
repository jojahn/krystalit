import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Mail } from '../model/Mail';
import { lightTheme } from '../styles/lightTheme';

@customElement('mail-list-panel')
export class MailListPanel extends LitElement {
	static get styles() {
		return [
			lightTheme,
		css`:host {
		width: fit-content;
		height: 100%;
		display: block;
		background-color: var(--background-color-secondary);
		color: var(--text-color);
		padding-top: 10px;
	}

	ul {
		height: 100%;
		margin: 0;
		padding: 0;
		list-style-type: none;
	}

	li {
		padding: 10px;
		border: none;
		width: 250px;
	}

	.mail {
		background-color: var(--background-color-secondary);
		cursor: pointer;
		border: none;
		border-radius: 0.2rem;
		transition: 0.3s;
	}

	.mail:hover {
		background-color: var(--background-color-secondary-hovered);
	}

	.mail.active {
		background: var(--accent-color);
	}

	.mail.active:hover {
		background: var(--accent-color-secondary);
	}

	.mail h1, h2, p {
		font-weight: lighter;
		margin: 0;
		padding: 0;
		margin: 5px;
	}

	.mail h1 {
		font-size: 1.4rem;
	}

	.mail p {
		font-size: 0.7rem;
	}

	.mail h2 {
		font-size: 0.8rem;
	}

	.no-mail-results {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 15px;
		text-align: center;
	}

	.no-mail-results > .material-icons {
		font-size: 2rem;
	}
	`]};

	@property({ type: Object })
	value: Mail | undefined = undefined;

	@property({ type: Array })
	mails: Mail[] = [];

	@property()
	onSelect = (mail: Mail) => { console.log("selected:", mail); };

	private onItemClick(mail: Mail) {
		return (event) => {
			this.onSelect(mail);
		}
	}

	render() {
		
		return html`<ul>${
			!!this.mails && this.mails.length > 0 ? this.mails.map((m) => html`
			<li class="mail ${m.messageID === this.value?.messageID ? 'active' : ''}" @click="${this.onItemClick(m)}">
				<h1>${m.subject}</h1>
				<h2>${m.sender} - ${m.date.toLocaleDateString()}</h2>
				<p>${m.body.slice(0, 100)}...</p>
			</li>
		`) : html`
			<li class="no-mail-results">
				<span class="material-icons">folder_open</span>
				<p>empty folder</p>
			</li>
		`}
		</ul>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"mail-list-panel": MailListPanel,
	}
}