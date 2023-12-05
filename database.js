const oracledb = require("oracledb");

// Setup Database
const oracleConnection = oracledb.getConnection({
  user: "hr",
  password: "oracle",
  connectString: "localhost/FREEPDB1",
});

// const result = oracleConnection.then((connect) => {
//   connect.execute(`SELECT city FROM locations`).then((data) => {
//     console.log(data.rows);
//   });
// });

module.exports = oracleConnection;
