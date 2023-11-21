import styled from "styled-components";

interface CheckboxProps {
  value?: boolean;
  onChange?: (value: boolean) => void;
}

const Checkbox = ({ value, onChange }: CheckboxProps) => {
  const _id = crypto.getRandomValues(new Uint32Array(1))[0].toString(16);

  return (
    <Wrapper>
      <input
        type="checkbox"
        id={_id}
        onChange={(e) => onChange && onChange(e.target.checked)}
        defaultChecked={value}
      />
      <label htmlFor={_id}></label>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  --size: 1.5rem;

  position: relative;
  width: var(--size);
  height: var(--size);

  label {
    position: absolute;
    top: 0;
    left: 0;
    width: var(--size);
    height: var(--size);
    background-color: var(--color-gray);
    border-radius: 50%;
    border: 1px solid var(--color-primary);
    cursor: pointer;

    &::after {
      content: "✓";
      font-size: calc(var(--size) * 0.5);
      font-weight: var(--bold-weight);
      color: var(--color-gray);
      opacity: 0;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: opacity 0.2s ease-in-out;
    }
  }

  input {
    visibility: hidden;
  }

  input:checked + label {
    background-color: var(--color-green);
    border: 1px solid var(--color-green);

    &::after {
      opacity: 1;
    }
  }
`;

export default Checkbox;
