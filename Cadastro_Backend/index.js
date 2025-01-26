import express from "express";
import cors from "cors"; // Importando o cors
import produtoRoute from "./src/routes/produto.route.js";
import connectDatabase from "./src/database/db.js";

const app = express();
const port = 3000;

// Usando o cors para permitir todas as origens
app.use(cors());

app.use(express.json());
app.use("/produto", produtoRoute);

app.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}`);
});

connectDatabase();
