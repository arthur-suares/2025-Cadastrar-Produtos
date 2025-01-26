import Produto from "../models/Produto.js";

const createProdutoService = (body) => Produto.create(body);
const findAllProdutos = () => Produto.find();


export default {
    createProdutoService,
    findAllProdutos,
};