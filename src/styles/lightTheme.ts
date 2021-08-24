import { css } from "lit";
import { baseTheme } from "./baseTheme";

export const lightTheme = baseTheme(css`
  :host {
    --background-color: #fff;
    --background-color-secondary: #eee;
    --background-color-tertiary: #ddd;
    --text-color: #333;
  }
`);