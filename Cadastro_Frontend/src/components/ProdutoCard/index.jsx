import { useState } from 'react';
import {
  CardContainer,
  CardHeader,
  CardInfo,
  CardMessage,
  CardStatus,
  StatusDropdown,
  Id
} from './styled.js';

export function ProdutoCard({ produto }) {  {/* Mudança no nome da prop */}
  return (        
    <CardContainer>
      <CardHeader>{produto.nome}</CardHeader>  {/* Alterado para 'produto' */}
      <CardInfo>
        <p><strong>Valor do produto: R$</strong> {produto.valor}</p>  {/* Alterado para 'produto' */}
        <p><strong>Disponível em estoque:</strong> {produto.opcao}</p>  {/* Alterado para 'produto' */}
      </CardInfo>
      <CardMessage>{produto.descricao}</CardMessage>  {/* Alterado para 'produto' */}
    </CardContainer>
  );
}
