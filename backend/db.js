const sql = require('mssql/msnodesqlv8')

const pool = new sql.ConnectionPool({
    database: 'StationerManagementSystem',
    server: 'ENES\\MSSQLSERVER1',
    driver: 'msnodesqlv8',
    options: {
        trustedConnection: true
    }
})

pool.connect().then(() => {
    //simple query
    console.log("database'e bağlandı...")
}).catch((err) => {
    console.log("database e bağlanırken bir hata ile karşılaşıldı" + err.message)
})


exports.db = pool