import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { lightTheme } from '../styles/lightTheme';

@customElement('folder-panel')
export class FolderPanel extends LitElement {
	static get styles() {
		return [
			lightTheme,
			css`
				:host {
					width: fit-content;
					min-width: 50px;
					height: 100%;
					display: block;
					background-color: var(--background-color-tertiary);
					box-shadow: 0 0 50px rgba(0,0,0,0.5);
					color: var(--text-color);
					z-index: 99;
					padding-top: 10px;
					overflow: hidden;
				}

				ul {
					list-style-type: none;
					margin: 0;
					padding: 0;
				}

				li {
					cursor: pointer;
					height: 30px;
					padding: 5px 15px;
					font-size: 1rem;
					line-height: 30px;
					display: flex;
					border: none;
					border-radius: 0.1rem;
					transition: 0.25s;
				}

				li.active {
					background: linear-gradient(to top left, #F7A9D6, #858EF8);
					background: #6E54EF;
					color: #222;
				}

				li.active:hover {
					background: #6BE1BA;
				}

				li.active .folder-icon {
					color: #222;
				}

				li:hover {
					background-color: #111;
				}

				.folder-icon {
					color: var(--text-color);
					line-height: 30px;
					margin-right: 10px;
					font-size: 1.25rem;
				}
        `
		]
	}

	@property()
	name = 'Somebody';

	render() {
		return html`<ul>
            <li class="active">
							<span class="material-icons folder-icon">inbox</span>
							<span>Inbound</span>
						</li>
            <li>
							<span class="material-icons folder-icon">outbox</span>
							<span>Outbound</span>
						</li>
            <li>
							<span class="material-icons folder-icon">send</span>
							<span>Sent</span>
						</li>
            <li>
							<span class="material-icons folder-icon">drafts</span>
							<span>Drafts</span>
						</li>
						<hr>
						<li>
							<span class="material-icons folder-icon">folder</span>
							<span>Orders</span>
						</li>
            <li>
							<span class="material-icons folder-icon">folder</span>
							<span>Correspondence</span>
						</li>
            <li>
							<span class="material-icons folder-icon">folder</span>
							<span>Shipping</span>
						</li>
        </ul>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"folder-panel": FolderPanel,
	}
}