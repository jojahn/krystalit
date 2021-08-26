import { css } from "lit";
import { baseTheme } from "./baseTheme";

export const lightTheme = baseTheme(css`
  :host {
    --background-color: #fff;
    --background-color-hovered: #eee;
    
    --background-color-secondary: #eee;
    --background-color-secondary-hovered: #ddd;
    
    --background-color-tertiary: #ddd;
    --background-color-tertiary-hovered: #ccc;

    --text-color: #444;

    --accent-color: #acc8e2;
    --accent-color-secondary: #afdbdb;
`);