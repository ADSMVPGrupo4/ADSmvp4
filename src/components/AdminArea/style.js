import styled from "styled-components";

export const AdminAreaConteiner = styled.div`
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h1 {
    margin-bottom: 20px;
    font-size: 28px;
    color: #333;
  }

  img {
    width: 4rem;
    height: 4rem;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    background-color: #fff;
  }

  thead {
    background-color: #007bff;
    color: white;
  }

  th,
  td {
    padding: 12px 15px;
    text-align: left;
    border-bottom: 1px solid #dee2e6;
  }

  tbody tr:hover {
    background-color: #f1f1f1;
  }

  button {
    margin: 10px 10px 0 0;
    padding: 10px 20px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #218838;
  }

  .centro {
    margin-left: 10;
  }
`;
