//const {db} = require("./db");
express = require('express')
api_routes = require('./Routes/routes.js')
//con = require('./db.js')

const PORT = 8000
const app = express()
app.use(express.json())
app.use(express.urlencoded())

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


//all routes
app.use('/api', api_routes.api_routes)


app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))