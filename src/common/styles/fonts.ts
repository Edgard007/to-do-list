import { css } from "styled-components";

const Fonts = css`
  // -> Import fonts
  @font-face {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 100 200 400 500 600 700;
    src: url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;400;500;600;700&display=swap&proxy");
  }

  @font-face {
    font-family: "Lora";
    font-style: normal;
    font-weight: 400 500 600 700;
    src: url("https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&display=swap");
  }

  @font-face {
    font-family: "Hind Madurai";
    font-style: normal;
    font-weight: 300 400 500 600 700;
    src: url("https://fonts.googleapis.com/css2?family=Hind+Madurai:wght@300;400;500;600;700&display=swap");
  }


  --primary-font: "Montserrat", Arial, sans-serif;
  --secundary-font: "Lora", Arial, sans-serif;
  --tertiary-font: "Hind Madurai", Arial, sans-serif;
`;

export default Fonts;
