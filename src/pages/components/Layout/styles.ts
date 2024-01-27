import styled from "styled-components";

export const Menu = styled.section`
  overflow-y: auto;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1.5vh;
  overflow: hidden;

  button {
    border: none;
    background-color: transparent;
    width: auto;
  }

  .link {
    color: ${({ theme }) => theme.colors.typography.white};
    font-family: "Verdana", sans-serif;
    font-weight: 200;
    height: 100%;
    text-decoration: none;
    transition: all 0.2s ease;

    /* ::before {
      content: "";
      height: 10vh;
      width: 5px;
      border-radius: 5px;
      transition: all 0.2s ease;
      position: absolute;
      left: 0;
    } */

    &:hover {
      background-color: ${({ theme }) => theme.colors.background.grayHover};
    }

    .link-text {
      margin-left: 1.5vw;
      white-space: nowrap;
      font-weight: 200;
      font-size: clamp(0.15rem, 0.23rem + 1.5vh, 5rem);
    }
    .active {
      font-weight: 600;
    }
  }

  .active {
    background-color: ${({ theme }) => theme.colors.background.graySelected};
    color: ${({ theme }) => theme.colors.secondary.main};
    border-left: 5px ${({ theme }) => theme.colors.secondary.main} solid;

    .link-text {
      font-weight: 600;
    }

    /* ::before {
      background-color: ${({ theme }) => theme.colors.secondary.main};
    } */

    svg {
      stroke: ${({ theme }) => theme.colors.secondary.main};
    }
  }
`;
