const express = require("express");
require("dotenv").config();
const app = express();
// middleware definido para quando acessar a rota "/", vão ser chamado os métodos do arquivopostRoute
app.use(express.json()) // mostrar os dados da request em formato json, 
app.use("/", require("./route/postsRoute"));

app.listen(3000);
