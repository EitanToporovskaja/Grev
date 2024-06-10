/*const sql = require('mssql');
const { Connection } = require('tedious');
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
async function connectAndQuery() {
    try {
        let pool = await sql.connect(config);
        console.log('Connected to the database');

        let result = await pool.request()
            .query('SELECT * FROM tu_tabla'); // Reemplaza 'tu_tabla' con el nombre de tu tabla

        console.log(result.recordset);

        await sql.close();
    } catch (err) {
        console.error('Conección a la base de datos fallida: ', err);
    }
}
module.exports = connectAndQuery;*/