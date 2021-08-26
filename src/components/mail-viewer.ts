import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Mail } from '../model/Mail';
import { lightTheme } from '../styles/lightTheme';

@customElement('mail-viewer')
export class MailViewer extends LitElement {
	static get styles() {
		return [
			lightTheme,
		  css`
        :host {
          flex-grow: 1;
        }

        article {
          height: 100%;
        }

        .header, .body {
          padding: 10px;
        }

        .no-mail-selected {
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          height: 100%;
        }
        
        .no-mail-selected > .material-icons {
          font-size: 4.5rem;
        }

        .no-mail-selected > p {
          font-size: 1.25rem;
        }
      `
    ]
  };

	@property({ type: Object })
	value: Mail | undefined = undefined;

	render() {
		console.log("render mail viewer");
		return html`
      <article>
        ${!!this.value ? html`
          <section class="header">
            <h1>${this.value.subject}</h1>
            <h2>${this.value.sender}</h2>
            <h3>${this.value.date.toLocaleDateString()}</h3>
          </section>
          <section class="body">
            ${this.value.body}
          </section>
        `
        : html`
          <section class="no-mail-selected">
            <span class="material-icons">mail</span>
            <p>Please select a mail</p>
          </section>
        `}
      </article>
    `;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"mail-viewer": MailViewer,
	}
}