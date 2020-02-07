const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require("cors");

//Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

// Iniciando o DB
mongoose.connect(
  "mongodb://productHunt:producthunt@cluster0-shard-00-00-ytmxr.mongodb.net:27017,cluster0-shard-00-01-ytmxr.mongodb.net:27017,cluster0-shard-00-02-ytmxr.mongodb.net:27017/product-hunt-db?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
requireDir("./src/models");

//Rotas
app.use("/api", require("./src/routes"));

app.listen(3001);
