const pg = require('pg');

module.exports = function(){ 
    const url = {
        user:'nico-dev',
        host:'127.0.0.1',
        database:'coordinador_electrico_v3',
        password:'',
        port: 5432
    }

    const client = new pg.Client(url);

    client.connect()
    .then(res => console.log('conectado'))
    .catch(err => console.log('error'));

    return client;
}




