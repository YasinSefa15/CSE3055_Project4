//const {db} = require("./db");
express = require('express')
api_routes = require('./Routes/routes.js')
//con = require('./db.js')

const PORT = 8000
const app = express()
app.use(express.json())
app.use(express.urlencoded())



//all routes
app.use('/api', api_routes.api_routes)


app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))