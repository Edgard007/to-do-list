import { createGlobalStyle } from "styled-components";

import Variables from "./Variables";
import Animations from "./Animations";

export const GlobalStyles = createGlobalStyle`
  ${Variables};
  ${Animations};

  * {
      border: 0;
      box-sizing: border-box;
      margin: 0px;
      padding: 0px;
      font-family: var(--font-main);
      background-color: var(--color-primary);
      transition-property: background-color, color, transform, visibility;
      transition-duration: 0.3s;
      transition-timing-function: ease-in, cubic-bezier(0.6,0.2,0.4,1.5), linear;
  }

  ::-webkit-scrollbar {
    width: 0.5rem;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--color-primary);
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--color-secundary);
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: var(--color-secundary-gray);
  }
`;
