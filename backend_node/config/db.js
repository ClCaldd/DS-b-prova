const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'bpnltu4d5vplc2liftky-mysql.services.clever-cloud.com',
  user: 'uqd0egxuii5fyecm',
  password: 'todfmpXOtCllJZiRhXLo',
  database: 'bpnltu4d5vplc2liftky',
});

connection.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados');
});

module.exports = connection;