import axios from "axios";
import { toast } from 'react-toastify';

const baseURL = "http://localhost:3000/produto";

const postProduto = async (json) => {
    try {
        const response = await axios.post(`${baseURL}/`, json, {
            headers: {
                "Content-Type": "application/json",
            }
        });

        toast.success("Produto cadastrado com sucesso!");
    } catch (error) {
        if (error.response) {
            console.error("Erro na resposta do servidor:", error.response.data);
        } else if (error.request) {
            console.error("Erro na requisição:", error.request);
        } else {
            console.error("Erro ao configurar a requisição:", error.message);
        }
        toast.error("Ocorreu um erro. Tente novamente!");
    }
};

const getAllProdutos = async () => {
    try {
        const response = await axios.get(`${baseURL}/`); 
        // if (response.data.message === "Não há nenhum sac deste tipo no momento") {
        //     toast.error("Não há sacs desse tipo ainda");
        //     return { data: [] }; // Retorna um array vazio para limpar a tela
        // }
        return response;
    } catch (error) {
        if (error.response) {
            console.error("Erro na resposta do servidor:", error.response.data);
        } else if (error.request) {
            console.error("Erro na requisição:", error.request);
        } else {
            console.error("Erro ao configurar a requisição:", error.message);
        }
        return { data: [] }; // Em caso de erro, também retorna um array vazio
    }
}

export default{
    postProduto,
    getAllProdutos,
}