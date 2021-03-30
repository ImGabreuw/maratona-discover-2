const express = require("express")
const server = express()
const routes = require("./routes")

// Usando Template engine
server.set('view engine', 'ejs')

// habilitar configurações do servidor (arquivos estáticos)
server.use(express.static("public"))

server.use(routes)

server.listen(3000, () => console.log("rodando"))