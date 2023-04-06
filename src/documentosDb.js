import { documentosColecao } from "./dbConnection.js";

function encontrarDocumento(nomeDocumento){
    const documento = documentosColecao.findOne({ nome: nomeDocumento })
    return documento
}

function atualizarDocumento(nomeDocumento, texto){
    const documento = documentosColecao.updateOne({ nome: nomeDocumento }, { $set: { texto } })
    return documento
}

function obterDocumentos(){
    const documentos = documentosColecao.find().toArray()
    return documentos
}

function cadastrarDocumento(nomeDocumento){
    const documento = documentosColecao.insertOne({
        nome: nomeDocumento,
        texto: ''
    })
    return documento
}

function deletarDocumento(nomeDocumento){
    const documento = documentosColecao.deleteOne({ nome: nomeDocumento })
    return documento
}

export { encontrarDocumento, atualizarDocumento, obterDocumentos, cadastrarDocumento, deletarDocumento }