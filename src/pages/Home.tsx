import { useTranslation } from "react-i18next";

import styled from "styled-components";

// ==> Components
import Input from "@components/Input";
import Button from "@src/components/Button";

const Home = () => {
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { elements } = e.currentTarget;

    const input = elements.namedItem("input");
    const isInput = input instanceof HTMLInputElement;
    if (!isInput || input == null) return;

    input.value = "";
  };

  return (
    <Wrapper>
      <section className="first_section">
        <article>
          <h1>{t("app_name")}</h1>
          <p>{t("app_descrip")}</p>
        </article>
        <form onSubmit={handleSubmit}>
          <Input label={t("form_input")} type="text" />
          <Button text={t("form_btn")} type="submit" />
        </form>
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

  .first_section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;

    article,
    form {
      width: 100%;
      height: 25%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    article {
      h1 {
        font-size: var(--font-bg);
        font-weight: var(--bold-weight);
        font-family: var(--primary-font);
        color: var(--color-secundary);
      }

      p {
        font-size: var(--font-sm);
        font-weight: var(--bold-weight);
        font-family: var(--secundary-font);
        color: var(--color-secundary-gray);
      }
    }
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;

export default Home;
