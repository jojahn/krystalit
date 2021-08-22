import "./components/nav-bar";
import { NavBar } from "./components/nav-bar";

import "./components/folder-panel";
import "./components/mail-list-panel";

import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('krystalit-app')
export class App extends LitElement {
  static styles = css`
		:host {
			font-family: Arial, Helvetica, sans-serif
		}
    .content {
			display: flex;
      position: fixed;
      top: 50px;
      width: 100vw;
      height: calc(100vh - 50px);
			left: 0;
    }`;

  @property()
  name = 'Somebody';

  render() {
    return html`
        <nav-bar></nav-bar>
        <div class="content">
            <folder-panel></folder-panel>
            <mail-list-panel></mail-list-panel>
        </div>
        `;
  }
}


document.getElementById("Title")?.insertAdjacentHTML("afterbegin", "<span>Hello, _!</span>");
console.log("Hello, World!");