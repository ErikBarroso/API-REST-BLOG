const express = require("express");
require("dotenv").config();
const app = express();
// middleware definido para quando acessar a rota "/", vão ser chamado os métodos do arquivopostRoute
app.use(express.json()); // mostrar os dados da request em formato json,
app.use("/", require("./route/postsRoute"));
app.use(function (error, req, res, next) {
  if (error.message === "Post already exists") {
    return res.status(409).send(e.message);
  }
  if (error.message === "Post not found") {
    return res.status(404).send(error.message);
  }
  res.status(500).send(error.message);
});

app.listen(3000);
