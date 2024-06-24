const express = require('express');
const router = express.Router();
const { sql, poolPromise } = require('./db');

router.post('/login', async (req, res) => {
    try {
        const pool = await poolPromise;
        const { username, password } = req.body;
        const result = await pool
            .request()
            .input('nombreUsu', sql.VarChar, username)
            .input('contraseña', sql.VarChar, password)
            .query('SELECT id, nombre, apellido, idTipoUsuario, empresa FROM Usuario WHERE nombreUsu = @nombreUsu AND contraseña = @contraseña AND activo = 1');

        if (result.recordset.length === 1) {
            res.json({ success: true, user: result.recordset[0] });
        } else {
            res.status(401).json({ success: false, message: 'Nombre de usuario o contraseña incorrectos.' });
        }
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

module.exports = router;
