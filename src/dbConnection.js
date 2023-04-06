import { MongoClient } from 'mongodb'

const cliente = new MongoClient(process.env.STRING_CONEXAO_DB)

let documentosColecao;

try{
    await cliente.connect();
    const db = cliente.db('websockets')
    documentosColecao = db.collection('documentos')

    console.log('Conectado ao banco de dados com sucesso')
}catch(error){
    console.log(error)
}

export { documentosColecao };