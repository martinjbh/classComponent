const express = require('express');
const app = express();
const cors = require("cors")

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get('/gettit', async (req, res) => {
    res.json({
        movies: [{ nombre: "Volver al futuro", año: 198555 }]
    })
})

app.listen(3005, () => {
    console.log('server run port: 3005')
})

