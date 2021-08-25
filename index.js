const express = require("express")
const MercadoPago = require("mercadopago")
const app = express()

MercadoPago.configure({
    sandbok: true,
    access_token: "TEST-8633448269781416-082513-9cb662a2e5920bc99d2b013b6f21b56c-468568792",
})

app.get("/", (req,res) => {
    res.send("Olá mundo!")
})

app.get("/op")

app.listen(3000,(req,res)=> {
    console.log("Servidor rodando!")
})