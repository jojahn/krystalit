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
import "./components/mail-viewer";
import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { lightTheme } from "./styles/lightTheme";
import { getMails } from "./services/mailProvider";
let App = class App extends LitElement {
    constructor() {
        super(...arguments);
        this.mails = [];
        this.selectedMail = undefined;
        this.selectedFolder = "Inbox";
        this.searchValue = "";
        this.onSelectMail = (mail) => {
            console.log("selected mail:", mail.messageID);
            this.selectedMail = mail;
        };
        this.onSelectFolder = (folder) => {
            console.log("selected folder:", folder);
            this.selectedFolder = folder;
        };
        this.onSearch = (value) => {
            this.searchValue = value;
        };
        this.getVisibleMails = () => {
            return this.mails
                .filter(m => m.folder === this.selectedFolder)
                .filter(m => {
                if (!this.searchValue) {
                    return true;
                }
                const inBody = m.body.indexOf(this.searchValue) != -1;
                const inSender = m.sender.indexOf(this.searchValue) != -1;
                const inSubject = m.subject.indexOf(this.searchValue) != -1;
                return inBody || inSender || inSubject;
            });
        };
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
    async connectedCallback() {
        super.connectedCallback();
        this.mails = await getMails();
        this.selectedMail = this.mails[0];
    }
    render() {
        console.log("render index");
        return html `
        <nav-bar .onSearch="${this.onSearch}"></nav-bar>
        <div class="content">
            <folder-panel
              .value="${this.selectedFolder}"
              .onSelect="${this.onSelectFolder}"
            ></folder-panel>
            <mail-list-panel
              .onSelect="${this.onSelectMail}"
              .value="${this.selectedMail}"
              .mails=${this.getVisibleMails()}
            ></mail-list-panel>
            <mail-viewer .value="${this.selectedMail}"></mail-viewer>
        </div>
        <link href="css/material-icons.css" rel="stylesheet">
        `;
    }
};
__decorate([
    property({ type: Array })
], App.prototype, "mails", void 0);
__decorate([
    property({ type: Object })
], App.prototype, "selectedMail", void 0);
__decorate([
    property()
], App.prototype, "selectedFolder", void 0);
__decorate([
    property()
], App.prototype, "searchValue", void 0);
App = __decorate([
    customElement('krystalit-app')
], App);
export { App };
(_a = document.getElementById("Title")) === null || _a === void 0 ? void 0 : _a.insertAdjacentHTML("afterbegin", "<span>Hello, _!</span>");
console.log("Hello, World!");
//# sourceMappingURL=index.js.map