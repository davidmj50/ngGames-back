import mysql from 'promise-mysql';
import keys from './keys';

//crea un hilo de conexion createConnection
//para produccion
const pool = mysql.createPool(keys.database);
pool.getConnection().then(connection => {
    pool.releaseConnection(connection);
    console.log('DB is connected')
});

export default pool;