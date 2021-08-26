import "./components/nav-bar";
import { NavBar } from "./components/nav-bar";

import "./components/folder-panel";
import "./components/mail-list-panel";
import "./components/mail-viewer";

import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import { lightTheme } from "./styles/lightTheme";
import { Mail } from "./model/Mail";
import { getMails } from "./services/mailProvider";

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

  @property({ type: Array })
  mails: Mail[] = [];

  @property({ type: Object })
  selectedMail: Mail | undefined = undefined;

  @property()
  selectedFolder: string | undefined = "Inbox";

  @property()
  searchValue: string = "";

  async connectedCallback() {
    super.connectedCallback()
  
    this.mails = await getMails();
    this.selectedMail = this.mails[0];
  }

  onSelectMail = (mail: Mail) => {
    console.log("selected mail:", mail.messageID);
    this.selectedMail = mail;
  }

  onSelectFolder = (folder: string) => {
    console.log("selected folder:", folder);
    this.selectedFolder = folder;
  }

  onSearch = (value: string) => {
    this.searchValue = value;
  }

  getVisibleMails = (): Mail[] => {
    return this.mails
      .filter(m => m.folder === this.selectedFolder)
      .filter(m => {
        if (!this.searchValue) {
          return true;
        }
        const inBody = m.body.indexOf(this.searchValue) != -1;
        const inSender = m.sender.indexOf(this.searchValue) != -1;
        const inSubject = m.subject.indexOf(this.searchValue) != -1;
        return inBody || inSender || inSubject
      })
  }

  render() {
    console.log("render index");
    return html`
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
}


document.getElementById("Title")?.insertAdjacentHTML("afterbegin", "<span>Hello, _!</span>");
console.log("Hello, World!");