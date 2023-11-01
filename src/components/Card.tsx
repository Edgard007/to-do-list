import styled from "styled-components";

// ==> Interfaces
import { ItemId } from "@interfaces/todo-interface";

// ==> Use Context
import useTodoContext from "@utils/contexts/useTodoContext";

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

  return (
    <Wrapper>
      {(state ?? []).map((item) => (
        <div key={item.id} className="card">
          <p>{item.text}</p>
          <span onClick={() => removeTask(item?.id)}>x</span>
        </div>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  padding: 5rem 1rem;
  overflow: scroll;

  .card {
    background-color: var(--color-primary);
    border-radius: 0.5rem;
    padding: 1rem;
    box-shadow: 0 0 0.5rem var(--color-secundary);
    width: 90%;
    height: 5rem;
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
        box-shadow: 0 0 0.5rem var(--color-yellow);
      }
    }
  }
`;

export default Card;
