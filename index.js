const express = require("express")
const MercadoPago = require("mercadopago")
const app = express()

MercadoPago.configure({
    sandbok: true,
    access_token: "TEST-8633448269781416-082513-9cb662a2e5920bc99d2b013b6f21b56c-468568792",
})

app.get("/", (req,res) => {
    res.send("Olá mundo!" + Date.now())
})

app.get("/pagar",async (req,res) => {

    var id = "" + Date.now()
    var emailDoPagador = "carlos@bandelli.com"

    var dados = {
        items: [
            item = {
                id: id,
                title: "2x video games;3x camisas",
                quantity: 1,
                currency_id: 'BRL',
                unit_price: parseFloat(150)
            }
        ],
        payer:{
            email: emailDoPagador
        },
        external_reference: id
    }
    try{
        var pagamento = await MercadoPago.preferences.create(dados)
        console.log(pagamento)
        return res.redirect(pagamento.body.init_point)
    }catch(err){
        return res.send(err.message)
    }

})

app.post("/not", (req,res) => {
    console.log(req.query)
    res.send("OK")
})

app.listen(80,(req,res)=> {
    console.log("Servidor rodando!")
})