import styled from "styled-components";

// ==> Components
import Navbar from "./components/Navbar";

interface LoggerProps {
  children?: JSX.Element | JSX.Element[];
}

const Logger = ({ children }: LoggerProps) => (
  <Wrapper>
    <Navbar />
    <main>{children}</main>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;

  main {
    position: absolute;
    width: 100%;
    height: calc(100% - var(--hNav));
    right: 0;
    bottom: 0;

    background-color: var(--color-primary);
  }
`;

export default Logger;
