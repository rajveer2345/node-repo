const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const bodyParser = require('body-parser');
const db = require('./src/db/db');
const apis = require('./src/routes/routes');

const app = express()


// port from env file
dotenv.config({ path: '.env' })
const port = process.env.PORT;
console.log(port)

app.use(cors())

//body parser
app.use(bodyParser.json());

//routes setup
app.use('/', apis);

//Server setup
app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})