import { css } from "styled-components";

// ==> Interfaces
import { DefaultTheme } from "@interfaces/theme-interface";

import Fonts from "./fonts";

const Variables = css<{ theme?: DefaultTheme }>`
  :root {
    // -> Fonts
    ${Fonts}

    // -> Font weight
    --regular-weight: 400;
    --semiBold-weight: 500;
    --bold-weight: bold;

    // -> Font size
    --font-bg: 4.5rem;
    --font-md: 1.75rem;
    --font-sm: 1rem;
    --font-min: 0.75rem;
    --font-sec: 0.625rem;
    --font-ter: 0.5rem;

    @media (max-width: 768px) {
      --font-bg: 3rem;
      --font-md: 1rem;
      --font-sm: 0.75rem;
    }

    // -> Color

    // Changing depending on mode
    --color-primary: ${({ theme }) => theme.primary};
    --color-secundary: ${({ theme }) => theme.secundary};
    --color-blue: ${({ theme }) => theme.blue};

    // Statics
    --color-light: ${({ theme }) => theme.light};
    --color-black: ${({ theme }) => theme.black};

    // Specific colors (More colors)
    --color-gray: #dddddd;
    --color-secundary-gray: #898989;
    --color-red: #f11434;

    --color-yellow: #f6c90e;
    --color-green: #306844;
    --color-orange: #ff7a3c;
    --color-skyblue: #77b5fe;

    // -> Gradient
    --oran-yell-grad: linear-gradient(
      to right,
      var(--color-orange),
      var(--color-yellow)
    );

    // -> Global height
    --hNav: 4rem;

    // -> Z-index
    --z-high: 10;
    --z-md: 5;
    --z-low: 1;
  }
`;

export default Variables;
