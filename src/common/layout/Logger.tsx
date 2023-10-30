import styled from "styled-components";

// ==> Components
import Navbar from "./components/Navbar";

interface LoggerProps {
  children?: JSX.Element | JSX.Element[];
}

const Logger = ({ children }: LoggerProps) => {
  return (
    <Wrapper>
      <Navbar />
      <main>{children}</main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;

  main {
    width: 100%;
    margin-top: var(--hNav);
    min-height: calc(100vh - var(--hNav));

    display: flex;
    background-color: var(--color-primary);
  }
`;

export default Logger;
