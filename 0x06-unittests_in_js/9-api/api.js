const express = require('express')

const app = express()
const port = 7865

app.get('/', (req, res) => {
    res.send('Welcome to the payment system')
})

app.get('/cart/:id', (req, res) => {
    itemID = req.params.id
    if (!isNaN(itemID)) {
        res.send(`Payment methods for cart ${itemID}`)
    }
    res.status(404).send('not found')
})
app.listen(port, () => {
    console.log('API available on localhost port 7865')
})