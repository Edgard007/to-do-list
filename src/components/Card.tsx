import styled from "styled-components";

// ==> Interfaces
import { ItemId } from "@interfaces/todo-interface";

// ==> Use Context
import useTodoContext from "@utils/contexts/useTodoContext";

// Components
import Checkbox from "./Checkbox";

const Card = () => {
  // == Context
  const { state, dispatch } = useTodoContext();

  const removeTask = (id: ItemId) => {
    dispatch({
      type: "REMOVE",
      payload: {
        id,
      },
    });
  };

  const toggleTask = (id: ItemId) => {
    dispatch({
      type: "UP_COMPLETE",
      payload: {
        id,
      },
    });
  };

  return (
    <Wrapper>
      {(state ?? []).map(({ id, text, completed }) => (
        <div key={id} className="card">
          <Checkbox value={completed} onChange={() => toggleTask(id)} />
          <p className={completed ? "through" : ""}>{text}</p>
          <span onClick={() => removeTask(id)}>x</span>
        </div>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;
  padding: 5rem 1rem;
  overflow: auto;

  @media (max-width: 800px) {
    padding: 0.5rem 1.5rem;

    .card {
      width: 100% !important;
    }
  }

  .card {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;

    background-color: var(--color-primary);
    border-radius: 0.5rem;
    padding: 1rem;
    box-shadow: 0 0 0.5rem var(--color-secundary);
    width: 90%;
    min-height: 5rem;
    text-align: left;
    position: relative;

    p,
    span {
      font-size: var(--font-sm);
      font-weight: var(--regular-weight);
      font-family: var(--tertiary-font);
      color: var(--color-secundary);
    }

    span {
      position: absolute;
      right: 0.5rem;
      top: 0.5rem;
      font-weight: var(--bold-weight);
      cursor: pointer;
      width: 1.5rem;
      height: 1.5rem;
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        border-radius: 50%;
        box-shadow: 0 0 1rem var(--color-red);
      }
    }

    .through {
      text-decoration: line-through;
    }
  }
`;

export default Card;
