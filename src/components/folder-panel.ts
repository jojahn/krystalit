import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('folder-panel')
export class FolderPanel extends LitElement {
	static styles = css`
        :host {
            width: 10vw;
            height: 100%;
            display: block;
            background-color: #ddd;
            box-shadow: 0 0 50px rgba(0,0,0,0.2);
            z-index: 99;
        }

        ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
        }

        li {
            cursor: pointer;
            height: 30px;
            padding: 5px;
            font-size: 1.25rem;
            line-height: 30px;
        }

        li:hover {
            background-color: #ccc;
        }
    `;

	@property()
	name = 'Somebody';

	render() {
		return html`<ul>
            <li>Inbound</li>
            <li>Outbound</li>
            <li>Sent</li>
            <li>Saved</li>
        </ul>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"folder-panel": FolderPanel,
	}
}