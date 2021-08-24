import "./components/nav-bar";
import { NavBar } from "./components/nav-bar";

import "./components/folder-panel";
import "./components/mail-list-panel";

import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import { lightTheme } from "./styles/lightTheme";

@customElement('krystalit-app')
export class App extends LitElement {
  static get styles() {
    return [
      lightTheme,
      css`
      /* @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap'); */
      :host {
        font-family: 'Roboto', sans-serif;
      }
      .content {
        display: flex;
        position: fixed;
        top: 50px;
        width: 100vw;
        height: calc(100vh - 50px);
        left: 0;
      }`
    ]
  }

  @property()
  name = 'Somebody';

  render() {
    return html`
        <nav-bar></nav-bar>
        <div class="content">
            <folder-panel></folder-panel>
            <mail-list-panel></mail-list-panel>
        </div>
        <link href="css/material-icons.css" rel="stylesheet">
        `;
  }
}


document.getElementById("Title")?.insertAdjacentHTML("afterbegin", "<span>Hello, _!</span>");
console.log("Hello, World!");