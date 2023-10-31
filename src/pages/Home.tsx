import { useTranslation } from "react-i18next";

import styled from "styled-components";

// ==> Context

const Home = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <section>
        <h1>{t("app_name")}</h1>
        <p>{t("app_descrip")}</p>
      </section>
      <section>
        <h1>{t("app_name")}</h1>
        <p>{t("app_descrip")}</p>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--color-primary);

  padding: 25px 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;

export default Home;
