import { useTranslation } from "react-i18next";

import styled from "styled-components";

// Icons
import { WorldIcon } from "@assets/CustomIcons";

// ==> Types
import { LngSite, lngsOpts, LngsOptsType } from "@utils/types/config-type";

interface MenuLngProps {
  lng: LngSite;
  setLng: (lng: LngSite) => void;
}

const MenuLng = ({ lng, setLng }: MenuLngProps) => {
  const { t } = useTranslation();

  const currentLng =
    (lngsOpts ?? []).find((lngs) => lngs.value === lng)?.label ?? lng ?? "";

  const otherLngs = (lngsOpts ?? []).filter((lngs) => lngs.value !== lng);

  return (
    <Wrapper>
      <button>
        <WorldIcon onClick={() => console.log("hola")} />
        <ul>
          <li>{t(currentLng)}</li>
          {otherLngs.map(({ label, value }: LngsOptsType) => (
            <li key={value} onClick={() => setLng(value)}>
              {t(label)}
            </li>
          ))}
        </ul>
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: calc(var(--w) / 2);
  height: 100%;
  background-color: transparent;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  &::before {
    content: "";
    display: block;
    width: 1px;
    height: 50%;
    border-left: 1px solid var(--color-secundary);
    opacity: 0.2;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }

  &::after {
    content: "";
    display: block;
    width: 1px;
    height: 50%;
    border-left: 1px solid var(--color-secundary);
    opacity: 0.2;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }

  button {
    background-color: transparent;
    border: none;
    width: 35%;
    height: 35%;
    transition: var(--medium-animation);
    cursor: pointer;
    position: relative;
    display: inline-block;
  }

  svg {
    position: absolute;
    width: 25px !important;
    height: 25px !important;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0 auto;
  }

  ul {
    display: none;
    width: 100px;
    position: absolute;
    top: 110%;
    right: 0;
    gap: 5px;
    padding: 10px 5px;
    background-color: var(--color-primary);
    z-index: calc(var(--z-md) + 1);
    border-radius: 10px;
    transition: var(--medium-animation);
    box-shadow: 0 0 5px var(--color-secundary);
  }

  button:hover ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  li {
    font-size: var(--font-min);
    font-family: var(--primary-font);
    font-weight: var(--bold-weight);
    color: var(--color-secundary);
    transition: var(--medium-animation);
    cursor: pointer;
    list-style: none;
    width: 80%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 25px;

    :first-child {
      border-bottom: 1px solid var(--color-secundary);
      background-color: transparent !important;
      color: var(--color-secundary) !important;
      cursor: not-allowed !important;
    }

    :hover {
      background-color: var(--color-secundary);
      color: var(--color-primary);
      cursor: pointer;
    }
  }
`;

export default MenuLng;
