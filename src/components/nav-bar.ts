import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { materialIconsStyles } from '../styles/material-icons';

@customElement('nav-bar')
export class NavBar extends LitElement {
	static get styles() {
		return [
			materialIconsStyles,
		css`nav {
			width: 100vw;
			height: 50px;
			top: 0;
			left: 0;
			position: fixed;
			display: block;
			background-color: #36f;
			background: linear-gradient(to top left, #6BE1BA, #6E54EF);
			z-index: 999;
			display: flex;
			box-shadow: 0 0 10px rgba(0,0,0,0.5);
		}

		.hex {
			line-height: 50px;
		}
	
		.hex img {
			height: 50px;
			width: 50px;
		}

		.search-bar {
			height: 50px;
			line-height: 50px;
			display: flex;
			justify-content: left;
			min-width: 500px;
		}
		.search-bar > input {
			height: 30px;
			margin: auto 0;
			margin-left: 10px;
			outline-style: none;
			border: none;
			display: block;
			background-color: #333;
			color: #fff;
			padding-left: 10px;
			width: 30%;
			border-radius: 0.2rem;
			box-shadow: 2px 2px 5px rgba(0,0,0,0.2);
			min-width: 300px;
		}
		.search-bar > button {
			display: block;
			border: none;
			background-color: transparent;
			cursor: pointer;
			margin-left: -36px;
    	color: #fff;
		}
	`]
	};

	@property()
	name = 'Somebody';

	@property()
	onSearch = () => undefined;

	render() {
		return html`<nav>
			<div class="hex">
			</div>
			<form class="search-bar">
				<input type="text" placeholder="search in mails">
				<button><span class="material-icons">search</span></button>
			</form>
		</nav>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"nav-bar": NavBar,
	}
}