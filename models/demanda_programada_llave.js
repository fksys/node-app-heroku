module.exports.insert = async function($payload,$client){
    
    $payload.forEach($p => {
        const $newRow = { 
        llave_id: parseInt($p.llave_id),
        llave_nombre_natural: JSON.stringify($p.llave_nombre_natural),
        barra: parseInt($p.barra), 
        };
        const $query = 'INSERT INTO demanda_programada_llaves (llave_id,llave_nombre_natural,barra) values($1,$2,$3) RETURNING *' ;
        $client.query($query,[$newRow.llave_id,$newRow.llave_nombre_natural,$newRow.barra]);
    });

}

module.exports.select = async function($client,$id,$response){
    let rowCount;
    let data=[];
    const $queryText = {
        rowMode:'array',
        name:'fetch demanda llaves',
        text:'select * from demanda_programada_llaves WHERE llave_id = $1',
        values:[$id],
    };
    
    const result = $client.query($queryText,(err,res) =>{
        if (err) throw err
        $response.send(res.fields)
    });

    
    
}

module.exports.exists = function(){

}