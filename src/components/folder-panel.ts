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
					min-width: fit-content;
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
					background-color: var(--background-color-tertiary);
					cursor: pointer;
					height: 30px;
					padding: 5px 15px;
					font-size: 1rem;
					line-height: 30px;
					display: flex;
					border: none;
					border-radius: 0.1rem;
					transition: 0.3s;
				}

				li.active {
					background: var(--accent-color);
					color: #222;
				}

				li.active:hover {
					background: var(--accent-color-secondary);
				}

				li.active .folder-icon {
					color: #222;
				}

				li:hover {
					background-color: var(--background-color-tertiary-hovered);
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

	@property({ type: String })
	value: string | undefined = undefined;

	@property()
	onSelect = (folder: string) => { console.log("selected:", folder); };

	private onItemClick(folder: string) {
		return (event) => {
			this.value = folder;
			this.onSelect(folder);
		}
	}

	render() {
		return html`<ul>
			<li class="${this.value === 'Inbox' ? 'active' : ''}" @click="${this.onItemClick('Inbox')}">
				<span class="material-icons folder-icon">inbox</span>
				<span>Inbound</span>
			</li>
			<li class="${this.value === 'Sent' ? 'active' : ''}" @click="${this.onItemClick('Sent')}">
				<span class="material-icons folder-icon">send</span>
				<span>Sent</span>
			</li>
			<li class="${this.value === 'Drafts' ? 'active' : ''}" @click="${this.onItemClick('Drafts')}">
				<span class="material-icons folder-icon">drafts</span>
				<span>Drafts</span>
			</li>
			<li class="${this.value === 'Deleted' ? 'active' : ''}" @click="${this.onItemClick('Deleted')}">
				<span class="material-icons folder-icon">delete</span>
				<span>Deleted</span>
			</li>
			<hr>
			<li class="${this.value === 'Orders' ? 'active' : ''}" @click="${this.onItemClick('Orders')}">
				<span class="material-icons folder-icon">folder</span>
				<span>Orders</span>
			</li>
			<li class="${this.value === 'Correspondence' ? 'active' : ''}" @click="${this.onItemClick('Correspondence')}">
				<span class="material-icons folder-icon">folder</span>
				<span>Correspondence</span>
			</li>
			<li class="${this.value === 'Shipping' ? 'active' : ''}" @click="${this.onItemClick('Shipping')}">
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