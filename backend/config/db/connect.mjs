//todo
import { createPool, createConnection } from 'mysql2/promise';
const mysqlhost = process.env.MYSQL_HOST;
const mysqluser = process.env.MYSQL_USER;
const mysqlpassword = process.env.MYSQL_PASSWORD;
const mysqldb = process.env.MYSQL_DB;

const dbConfig = {
  host: '127.0.0.1',
  // host: mysqlhost,
  user: 'root',
  // user: mysqluser,
  password: 'Parolavietii',
  // password: mysqlpassword,
  database: 'swgsite',
  // database: mysqldb,
};

export const executePreparedQuery = async (query, values) => {
  let connection;
  try {
    connection = await createConnection(dbConfig);
    const [rows] = await connection.execute(query, values);
    return rows;
  } catch (error) {
    console.log(error);
    return error;
  } finally {
    // console.log('finally executed!!!! dada!!!!!!!');
    if (connection) connection.end();
  }
};

// /**
//  * Could not implement pools hard to do. Must be created first in index file and then passed to controllers somehow without re-instanciating another pool (create the pool and pass on the getConnection method to controllers that need it - for custom queries.)
//  */
// const connectionPool = createPool({
//   host: '127.0.0.1',
//   // host: mysqlhost,
//   user: 'root',
//   // user: mysqluser,
//   password: 'Parolavietii',
//   // password: mysqlpassword,
//   database: 'swgsite',
//   // database: mysqldb,
//   waitForConnections: true,
//   connectionLimit: 10,
//   maxIdle: 10,
//   idleTimeout: 60000,
//   queueLimit: 0,
//   enableKeepAlive: true,
//   keepAliveInitialDelay: 0,
// });

// const executeQuery = async (pool, query) => {
//   let connection;
//   try {
//     connection = await pool.getConnection();
//     const [results, fields] = await connection.execute(query);
//     console.log(results);
//   } catch (error) {
//     console.error(`Error executing query: ${error}`);
//   } finally {
//     if (connection) connection.release();
//   }
// };

// const queries = [
//   'SELECT * FROM `location` LIMIT 10',
//   'SELECT * FROM `profile_type` LIMIT 10',
//   'SELECT * FROM `users` LIMIT 10',
//   'SELECT * FROM `getUsers` LIMIT 10',
// ];

// for (let query of queries) {
//   executeQuery(connectionPool, query);
// }

// //SHOW PROCESSLIST;
