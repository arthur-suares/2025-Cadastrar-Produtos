import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import produtoService from "../../services/produto.service";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // CSS do <ToastContainer />
import { PuffLoader } from "react-spinners";

import { 
    Form,
    Title,
    Label,
    Input,
    TextArea,
    Button,
    Select,
} from "./styled";

function CardCadastro() {
    const [produtos, setProdutos] = useState([]);

    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [valor, setValor] = useState("");
    const [opcao, setOpcao] = useState("Sim");  
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);

    const Formulario_JSON = {
        nome,
        descricao,
        valor,
        opcao
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true); // Ativa o carregamento
    
        try {
            await produtoService.postProduto(Formulario_JSON);
        } catch (error) {
            console.log("Erro ao cadastrar o produto:", error);
        } finally {
            setIsLoading(false);
            navigate("/listarProdutos");
        }
        
    };
    

    return (
        <>
            <div style={{
                placeItems:"center"
            }}>

                <Form>
                    <ToastContainer /> 
                    <Title>Cadastro</Title>
                    <h5 style={{color: "#006343", marginTop: 0}}>Coloque abaixo as informações do produto a ser cadastrado!</h5>
                    
                    <Label htmlFor="name" style={{color: "#006343"}}>Nome do produto</Label>
                    <Input
                        type="text"
                        id="name"
                        placeholder="Nome do produto"
                        value={nome}
                        onChange={(e) => {
                            setNome(e.target.value);
                            console.log("Nome atualizado:", e.target.value); 
                        }}
                    />

                    <Label htmlFor="message" style={{color: "#006343"}}>Descrição:</Label>
                    <TextArea 
                        id="message" 
                        rows="5" 
                        placeholder="Descricao" 
                        value={descricao} 
                        onChange={(e) => {
                            setDescricao(e.target.value);
                            console.log("Descrição preenchida:", e.target.value);                        
                        }}                       
                        
                    >
                    </TextArea>

                    <Label htmlFor="Valor" style={{color: "#006343"}}>Valor do produto:</Label>
                    <Input 
                        type="text"
                        id="valor"
                        placeholder="Valor do produto"
                        value={valor}
                        inputMode="numeric"
                        pattern="[0-9]*"
                        onChange={(e) => {
                            const valor = e.target.value;
                            if (/^\d*$/.test(valor)) {
                                setValor(valor);
                            } else {
                                e.target.value = valor;
                            }
                            console.log("Valor do produto atualizado:", valor);
                        }}
                    />

                    <Label htmlFor="subject" style={{color: "#006343"}}>Opção:</Label>                
                    <Select
                        id="subject"
                        value={opcao}
                        onChange={(e) => {
                            setOpcao(e.target.value);
                            console.log("Opção preenchida:", e.target.value);
                        }}
                    >
                        <option value=" ">Sim</option>
                        <option value="Nao">Não</option>
                    </Select>


                    <Button type="submit" onClick={handleSubmit} disabled={isLoading}>
                        {isLoading ? "Cadastrando..." : "Cadastrar"}
                    </Button>
                    
                    {isLoading && (
                        <div style={{ textAlign: "center", marginTop: "1rem" }}>
                            <PuffLoader color="#006343" />
                        </div>
                    )}
                </Form>
            </div>
        </>
        
    );
}

export default CardCadastro;