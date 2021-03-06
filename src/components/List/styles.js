import styled from "styled-components";

export const Container = styled.div`
  padding: 10px 15px;
  height: 100%;
  max-height: 100%;
  flex: 0 0 400px;
  overflow-y: auto;
  opacity: ${props => (props.done ? 0.5 : 1)};
  margin: 0 20px;
  background-color: #dcdde1;
  border-radius: 5px;
  box-shadow: inset 0 -10px 10px -10px #999;

  & + div {
    border-left: 1px solid #dcdde1;
  }

  header {
    display: flex;
    height: 30px;

    h2 {
      font-weight: 500;
      font-size: 16px;
      padding: 0 10px;
    }

    button {
      width: 40px;
      height: 40px;
      border-radius: 100%;
      background: #353b48;
      border: 0;
      cursor: pointer;
    }
  }

  ul {
    padding: 10px 20px;
    margin-top: 20px;
    max-height: 100%;
  }
`;
