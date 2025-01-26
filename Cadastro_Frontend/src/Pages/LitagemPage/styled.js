import styled from "styled-components";
import { BiSolidError } from "react-icons/bi";

export const ProdutosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    color: #666;
    font-size: 16px;
    margin-top: 20px;
  }
`;

export const Button = styled.button`
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  
  margin: 1rem;
  color: white;
  background-color: #006343;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #004c2e;
  }
`;

export const ErrorMessageContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin: 10px 0;
    width: 100vw;
    max-width: 600px;
`;