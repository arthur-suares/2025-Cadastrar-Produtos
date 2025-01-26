import produtoService from "../services/produto.service.js";

const create = async (req, res) => {
    const {nome, descricao, valor, opcao} = req.body;
    
    if(!nome || !descricao || !valor || !opcao)
    {
        res.status(400).send({message: "Envie todos os campos corretamente"});
    }

    const produto = await produtoService.createProdutoService(req.body);

    if(!produto)
    {
        return res.status(400).send({message: "Erro ao cadastrar produto"});
    }

    res.status(201).send({
        message: "Produto cadastrado com sucesso!",
        produto: {
            nome,
            descricao,
            valor,
            opcao,
        },
    });
};

const findAll = async (req, res) => {
    const produtos = await produtoService.findAllProdutos();
    
    if(produtos.length === 0){
        return res.status(400).send({ message: 'Nenhum produto cadastrado no momento' });
    }

    res.send(produtos);
}


export default {
    create,
    findAll,
};