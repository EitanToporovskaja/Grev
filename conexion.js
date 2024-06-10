const Connection = require('tedious').Connection;
const Request = require('tedious').Request;
const sql = require('mssql');

const config = { 
        server: 'A-PHZ2-CIDI-18',
        user: 'LucasRu',
        password: '1234',
        database: 'Grev',
        options: {
            encrypt: false,
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
        console.error('Coneccion a la base de datos fallida: ', err);
    }
}
async function login(username, password) {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .input('username', sql.VarChar, username)
            .input('password', sql.VarChar, password)
            .query('SELECT * FROM Users WHERE username = @username AND password = @password');

        await sql.close();
        if (result.recordset.length > 0) {
            return { success: true, message: 'Inicio de sesión exitoso', user: result.recordset[0] };
        } else {
            return { success: false, message: 'Usuario o contraseña incorrectos' };
        }
    } catch (err) {
        console.error('Error al conectar con la base de datos: ', err);
        return { success: false, message: 'Ocurrió un error al conectar con la base de datos.' };
    }
}

login('exampleUsername', 'examplePassword').then(result => {
    console.log(result);
});

connectAndQuery();