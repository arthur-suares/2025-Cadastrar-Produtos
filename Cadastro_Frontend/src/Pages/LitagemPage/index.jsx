import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import produtoService from "../../services/produto.service";
import Navbar from "../../components/Navbar";
import { ProdutoCard} from "../../components/ProdutoCard";

import {
  ErrorMessageContainer,
  ProdutosContainer,
  Button
} from "./styled"

function ListagemPage() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true); 
  const navigate = useNavigate();
  
  async function findAllProdutos() {
    try {
      const response = await produtoService.getAllProdutos();
      setProdutos(response.data);
      setLoading(false); 
    } catch (error) {
      console.error("Erro ao carregar os produtos:", error);
      setLoading(false); 
    }
  }

  useEffect(() => {
    findAllProdutos();
  }, []); 

  const handleCadastrarProduto = () => {
    navigate("/"); // Navega para a rota de cadastro
  };

  return (
    <>   
      <Navbar/>

      <Button onClick={handleCadastrarProduto}>
        Cadastrar novo produto
      </Button>

      <ProdutosContainer>
        {loading ? (
          <p>Carregando produtos...</p> 
        ) : produtos.length > 0 ? (
          produtos.map((item, index) => <ProdutoCard key={index} produto={item} />)
        ) : (
          <ErrorMessageContainer>
            <BiSolidError size={60} color="orange" style={{ marginRight: 10 }} />
            <p>Nenhum produto encontrado.</p>
          </ErrorMessageContainer>
        )}
      </ProdutosContainer>
    </>
  );
}


export default ListagemPage;
