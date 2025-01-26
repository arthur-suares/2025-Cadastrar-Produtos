import mongoose from "mongoose";

const connectDatabase = () => {
    console.log("Esperando por conexão")

    mongoose.connect(
        "",
        { useNewUrlParser: true, useUnifiedTopology: true }
    ).then(() => console.log("MongoDB Atlas conectado!")).catch((error) => console.log(error))
};

export default connectDatabase;