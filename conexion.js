const Connection = require('tedious').Connection;
const Request = require('tedious').Request;
const sql = require('mssql');

const config = { 
        server: 'A-PHZ2-CIDI-18',
        user: 'LucasRu',
        password: '1234',
        database: 'Grev',
        options: {
            encrypt: true,
            trustServerCertificate: true
        }
    };
const connection = new Connection(config);

connection.connect();

connection.on('connect',  (err) => {
    if (err) {
        throw err;
    } 
    executeStatement();
    });
function executeStatement() {
    const request = new Request("SELECT * FROM dbo.Categoria", (err, rowCount) => {
        if (err) {
            throw err;
        }
        connection.close();
    });
    request.on('row', (columns) => {
        columns.forEach(column => {
            console.log(column.value);
        });
    });
connection.execSql(request);
}
async function connectAndQuery() {
    try {
        let pool = await sql.connect(config);
        console.log('Connected to the database');

        let result = await pool.request()
            .query('SELECT * FROM tu_tabla'); // Reemplaza 'tu_tabla' con el nombre de tu tabla

        console.log(result.recordset);

        await sql.close();
    } catch (err) {
        console.error('Database connection failed: ', err);
    }
}

connectAndQuery();