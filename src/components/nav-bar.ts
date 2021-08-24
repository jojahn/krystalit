import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import {query} from 'lit-element/lib/decorators.js';
import { lightTheme } from '../styles/lightTheme';
import { deg2rad, generateCSSHexDimensions } from '../services/math';

@customElement('nav-bar')
export class NavBar extends LitElement {
	static get styles() {
		return [
			lightTheme,
			this.makeHexCSS(),
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
			background-color: var(--background-color);
			color: var(--text-color);
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
    	color: var(--text-color);
		}
	`]
	};

	@property()
	name = 'Somebody';

	@property()
	onSearch = (value) => undefined;

	@property()
	public value: string = "";

	onSubmit = (event) => {
		event.preventDefault();
		this.onSearch(this.value);
	}

	onChange = (event: any) => {
		this.value = event.target.value;
	}

	static makeHexCSS() {
		const height = 40;
		let { box: { w: boxWidth, h: boxHeight }, triangles: { h: trianglesHeight } } = generateCSSHexDimensions(height);
		console.log(boxWidth, boxHeight, trianglesHeight);
		boxHeight = height * 0.46;
		trianglesHeight = (height - boxHeight) / 2;
		boxWidth = height * 0.93;
		console.log(boxWidth, boxHeight, trianglesHeight);
		const boxWidthHalf = boxWidth / 2;
		return css`
			.hex:before {
				content: " ";
				width: 0; height: 0;
				border-bottom: ${trianglesHeight}px solid var(--background-color); /* 30px */
				border-left: ${boxWidthHalf}px solid transparent; /* 52px */
				border-right: ${boxWidthHalf}px solid transparent; /* 52px */
				position: absolute;
				top: -${trianglesHeight}px; /* -30px */
			}

			.hex {
				margin-top: ${trianglesHeight}px; /* 30px */
				width: ${boxWidth}px; /* 104px */
				height: ${boxHeight}px; /* 104px */
				background-color: var(--background-color);
				position: relative;
			}

			.hex:after {
				content: "";
				width: 0;
				position: absolute;
				bottom: -${trianglesHeight}px; /* -30px */
				border-top: ${trianglesHeight}px solid var(--background-color); /* 30px */
				border-left: ${boxWidthHalf}px solid transparent; /* 52px */
				border-right: ${boxWidthHalf}px solid transparent; /* 52px */
			}
		`
	}

	render() {
		return html`<nav>
			<div class="hex"></div>
			<form class="search-bar" @submit=${this.onSubmit}>
				<input type="text" placeholder="search in mails" .value="${this.value}" @input="${this.onChange}">
				<button type="submit"><span class="material-icons">search</span></button>
			</form>
		</nav>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"nav-bar": NavBar,
	}
}