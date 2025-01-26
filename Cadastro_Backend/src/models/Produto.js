import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    descricao: {
        type: String,
        required: true,
    },
    valor: {
        type: String,
        required: true,
        unique: true,
    },
    opcao: {
        type: String,
        required: true,
    },
});

const Produto = mongoose.model("Produto", UserSchema);
export default Produto;