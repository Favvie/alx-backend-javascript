const express = require('express')

const app = express()
const port = 7865

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Welcome to the payment system')
})

app.get('/cart/:id([0-9]+)', (req, res) => {
    itemID = req.params.id
    res.send(`Payment methods for cart ${itemID}`)

})

app.get('/available_payments', (req, res) => {
    res.json({
  payment_methods: {
    credit_cards: true,
    paypal: false
  }
})
})

app.post('/login', (req, res) => {
    username = req.body.userName
    if (userName1) {
        res.send(`Welcome ${username}`)
    }
    res.status(404).send()

})
app.listen(port, () => {
    console.log('API available on localhost port 7865')
})

module.exports = app