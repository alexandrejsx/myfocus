import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
  background: #fff;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 0 15px 15px 15px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2);
  cursor: grab;

  p {
    font-weight: 500;
    line-height: 20px;
  }

  img {
    width: 24px;
    height: 24px;
    border-radius: 2px;
    margin-top: 5px;
  }

  ${props =>
    props.isDragging &&
    css`
      border: 2px dashed rgba(0, 0, 0, 0.2);
      padding-top: 31px;
      border-radius: 0;
      background: transparent;
      box-shadow: none;
      cursor: grabbing;
      p,
      img,
      header {
        opacity: 0;
      }
    `}
`;

export const Label = styled.span`
  width: 10px;
  height: 25px;
  border-radius: 2px;
  background: ${props => props.color};
`;
