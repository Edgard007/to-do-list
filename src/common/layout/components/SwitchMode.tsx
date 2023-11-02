import styled from "styled-components";

// ==> Types
import { ModeSite } from "@utils/types/config-type";

interface StyledProps {
  width?: number;
  height?: number;
}

interface SwitchModeProps extends StyledProps {
  mode: ModeSite;
  changeMode: (mode: ModeSite) => void;
}

const SwitchMode = ({ width, height, mode, changeMode }: SwitchModeProps) => (
  <Wrapper width={width} height={height}>
    <input
      type="checkbox"
      id="toggle_checkbox"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        const checked = e?.target?.checked;
        changeMode && changeMode(checked ? "dark" : "light");
      }}
      checked={mode === "dark"}
    />
    <label htmlFor="toggle_checkbox">
      <div id="star">
        <div className="star" id="star-1">
          ★
        </div>
        <div className="star" id="star-2">
          ★
        </div>
      </div>
      <div id="moon"></div>
    </label>
  </Wrapper>
);

const Wrapper = styled.div<StyledProps>`
  width: calc(var(--w) / 2);
  height: 100%;
  background-color: transparent;
  position: relative;

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

  #toggle_checkbox {
    display: none;
  }

  label {
    --bg: var(--color-skyblue);

    display: flex;
    flex-direction: row;
    position: absolute;
    top: 50%;
    right: 0;
    left: 0;
    width: ${(props) => props.width || "40px"};
    height: ${(props) => props.height || "22px"};
    margin: 0 auto;
    background-color: var(--bg);
    border-radius: 56px;
    transform: translateY(-50%);
    cursor: pointer;
    transition: var(--slow-animation);
    overflow: hidden;
    border: 1px solid var(--color-secundary);
  }

  #star {
    position: relative;
    width: 50%;
    height: 100%;
    background-color: transparent;

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 8px;
      height: 8px;
      background-color: var(--color-yellow);
      border-radius: 50%;
      transform: translate(-50%, -50%);
      transition: var(--slow-animation);
    }
  }

  #star-1 {
    position: absolute;
  }

  #star-2 {
    position: absolute;
    transform: translate(-50%, -50%) rotate(36deg);
  }

  .star {
    top: 50%;
    left: 50%;
    font-size: 15px;
    line-height: 0px;
    color: var(--color-yellow);
    transition: var(--slow-animation);
    transform: translate(-50%, -50%);
  }

  #moon {
    position: relative;
    width: 50%;
    height: 100%;
    background-color: transparent;
    display: none;

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 10px;
      height: 10px;
      background-color: var(--color-secundary);
      border-radius: 50%;
      transform: translate(-50%, -50%);
      transition: var(--slow-animation);
    }

    &::after {
      content: "";
      position: absolute;
      top: 15%;
      left: 8%;
      width: 10px;
      height: 10px;
      background-color: var(--color-black);
      border-radius: 50%;
      transition: var(--slow-animation);
    }
  }

  #toggle_checkbox:checked + label {
    --bg: var(--color-primary);
  }

  #toggle_checkbox:checked + label #star {
    position: absolute;
    width: 100%;
    height: 100%;

    &::before {
      top: 36%;
      right: 25%;
      left: auto;
      width: 2px;
      height: 2px;
      transform: translateY(-50%);
      z-index: 1;
    }
  }

  #toggle_checkbox:checked + label .star {
    top: 35%;
    right: 23%;
    left: auto;
    font-size: 4px;
    transform: translateY(-50%);
    z-index: 1;
  }

  #toggle_checkbox:checked + label #star-2 {
    transform: rotate(36deg);
  }

  #toggle_checkbox:checked + label #moon {
    display: block;
    width: 100%;

    &::before {
      left: auto;
      right: 10%;
      transform: translateY(-50%);
    }

    &::after {
      top: 15%;
      right: 18%;
      left: auto;
    }
  }
`;

export default SwitchMode;
