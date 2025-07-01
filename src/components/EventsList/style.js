import styled from "styled-components";

export const AreaProtegidaTexto = styled.h1`
  text-align: center;
`;

export const AreaProtegidaConteiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 10rem;
  width: 100%;
  padding: 20px;

  div {
    flex: 1 1 45%; /* Cada div ocupa ~45% da largura no desktop */
    max-width: 600px;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    div {
      flex: 1 1 100%;
      max-width: 100%;
    }
  }
`;

export const ParqueSaquarema = styled.img`
  width: 100%;
  height: auto;
  max-height: 300px;
  object-fit: cover;
  margin-bottom: 1rem;
  border-radius: 8px;
`;

export const EventCardConteiner = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5rem;
  margin-top: 6rem;
`;
