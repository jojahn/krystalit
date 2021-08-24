var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _a;
import "./components/nav-bar";
import "./components/folder-panel";
import "./components/mail-list-panel";
import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { lightTheme } from "./styles/lightTheme";
let App = class App extends LitElement {
    constructor() {
        super(...arguments);
        this.name = 'Somebody';
    }
    static get styles() {
        return [
            lightTheme,
            css `
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
        ];
    }
    render() {
        return html `
        <nav-bar></nav-bar>
        <div class="content">
            <folder-panel></folder-panel>
            <mail-list-panel></mail-list-panel>
        </div>
        <link href="css/material-icons.css" rel="stylesheet">
        `;
    }
};
__decorate([
    property()
], App.prototype, "name", void 0);
App = __decorate([
    customElement('krystalit-app')
], App);
export { App };
(_a = document.getElementById("Title")) === null || _a === void 0 ? void 0 : _a.insertAdjacentHTML("afterbegin", "<span>Hello, _!</span>");
console.log("Hello, World!");
//# sourceMappingURL=index.js.map