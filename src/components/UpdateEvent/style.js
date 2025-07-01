import styled from "styled-components";

export const HeaderConteiner = styled.div`
  display: flex;
  justify-content: space-around;
  background: #7ad189;

  a {
    color: rgb(0, 0, 0);
    margin-top: 15px;
    font-size: 15px;
    margin-left: 20px;
  }

  img {
    width: 40px;
    height: 40px;
    margin-top: 5px;
    margin-left: 10px;
  }

  div {
    width: 30%;
    display: flex;
    justify-content: space-evenly;
  }

  button {
    width: 60px;
    height: 32px;
    background: #4cac5d;
    border-radius: 20px;
    padding: 5px;
    border: none;
    margin-top: 10px;
    margin-right: 20px;
  }

  h1 {
    font-size: 20px;
    color: rgb(0, 0, 0);
  }
`;
