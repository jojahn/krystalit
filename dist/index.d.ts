import "./components/nav-bar";
import "./components/folder-panel";
import "./components/mail-list-panel";
import "./components/mail-viewer";
import { LitElement } from 'lit';
import { Mail } from "./model/Mail";
export declare class App extends LitElement {
    static get styles(): import("lit").CSSResult[];
    mails: Mail[];
    selectedMail: Mail | undefined;
    selectedFolder: string | undefined;
    searchValue: string;
    connectedCallback(): Promise<void>;
    onSelectMail: (mail: Mail) => void;
    onSelectFolder: (folder: string) => void;
    onSearch: (value: string) => void;
    getVisibleMails: () => Mail[];
    render(): import("lit-html").TemplateResult<1>;
}
//# sourceMappingURL=index.d.ts.map