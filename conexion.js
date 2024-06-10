const Connection = require('tedious').Connection;
const Request = require('tedious').Request;

const config = { 
    server: 'A-PHZ2-CIDI-18',
    authentication: {
        type: 'default',
        options: {
            userName: "",
            password: ""
        }
    },
    options: {
        port: 1433,
        database: 'CIDI',
        trustServerCertificate: true,
    }
}
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