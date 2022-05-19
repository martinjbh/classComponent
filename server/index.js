const express = require('express');
const app = express();
const cors = require("cors")

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get('/gettit', async (req, res) => {
    res.json({
        movies: [{ nombre: "Volver al futuro", año: 198555 }]
    })
})
app.post('/ApiAxios', async (req, res) => {
    console.log(`AxiosNombre: ${req.body.nombre}`)
    console.log(`AxiosApellido: ${req.body.apellido}`)
    console.log(`AxiosEdad: ${req.body.edad}`)
    res.json({ status: 401, body: 'err' })

})

app.listen(3005, () => {
    console.log('server run port: 3005')
})

