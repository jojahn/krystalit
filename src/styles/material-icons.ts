import { css } from "lit";

export const materialIconsStyles = css`
@font-face {
    font-family: 'Material Icons';
    font-style: normal;
    font-weight: 400;
    src: url(/fonts/material-icons-font.woff2) format('woff2');
}
  
.material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-feature-settings: 'liga';
    -webkit-font-smoothing: antialiased;
  }
`;