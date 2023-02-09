
require("dotenv").config()

const express = require("express");
const cors = require("cors");
const dbConnect = require('./config/mongo')
const app = express();

app.use(cors());

const port = process.env.PORT || 3000


// ----------Aqui imvocamos las rutas -------------------------
// Todo localhost/Api/_________________

app.use("/api", require("./routes"))



app.listen(port, () => {
    console.log(`tu app esta lista por  http://localhost:${port}`)
});

dbConnect();