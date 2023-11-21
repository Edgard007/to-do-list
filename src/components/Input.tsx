import styled from "styled-components";

interface WrapperProps {
  width?: string;
  error?: boolean;
}
interface InputProps extends WrapperProps {
  label: string;
  type: "text" | "email" | "password" | "time" | "textarea";
  name?: string;
  onChange?: (value: string, e: any) => void;
  value?: string | number | undefined;
  readonly?: boolean;
  className?: string;
}

const Input = ({
  label,
  type,
  name = "input",
  onChange,
  value,
  readonly,
  className,
  width,
  error,
}: InputProps) => (
  <Wrapper width={width} error={error}>
    <div className="contain">
      <label>{label}</label>
      <>
        {type === "textarea" ? (
          <textarea
            name={name}
            className={"customInput " + (className || "")}
            onChange={(e) => onChange && onChange(e?.target?.value, e)}
            value={value}
            readOnly={readonly}
          />
        ) : (
          <input
            type={type}
            name={name}
            autoComplete="off"
            className={"customInput " + (className || "")}
            onChange={(e) => onChange && onChange(e?.target?.value, e)}
            value={value}
            readOnly={readonly}
          />
        )}
      </>
    </div>
  </Wrapper>
);

const Wrapper = styled.div<WrapperProps>`
  margin: 10px 0;
  width: ${(props) => props?.width || "90%"};
  display: flex;
  justify-content: center;
  align-items: center;

  .contain {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    label {
      text-align: left;
      width: 100%;
      font-size: var(--font-min);
      font-weight: var(--bold-weight);
      font-family: var(--primary-font);
      color: var(--color-secundary-gray);
    }

    textarea {
      height: 3.4375em !important;
    }

    input,
    textarea {
      border: ${(props) =>
        props?.error
          ? "1px solid var(--color-red)"
          : "1px solid var(--color-secundary-gray)"};
      border-radius: 0.35rem;
      background: transparent;
      width: 100%;
      padding: 0.75rem;
      height: 2rem;
      color: var(--color-secundary);
      box-sizing: border-box;

      :focus {
        border: 2px solid var(--color-blue);
        outline: none;
      }
    }
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: all 5000s ease-in-out 0s;
    transition-property: background-color, color;
  }
`;

export default Input;
