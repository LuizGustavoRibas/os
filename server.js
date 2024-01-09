const express = require('express')
const osRoutes = require('./src/os/routes')
const clientesRoutes = require('./src/clientes/routes')
const servicosRoutes = require('./src/servicos/routes')

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello world!");
})

app.use('/os', osRoutes)
app.use('/clientes', clientesRoutes)
app.use('/servicos', servicosRoutes)

app.listen(port, () => console.log(`app listening on port ${port}`));
