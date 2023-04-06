import { documentosColecao } from "./dbConnection.js";

function encontrarDocumento(nomeDocumento){
    const documento = documentosColecao.findOne({ nome: nomeDocumento })
    return documento
}

function atualizarDocumento(nomeDocumento, texto){
    const documento = documentosColecao.updateOne({ nome: nomeDocumento }, { $set: { texto } })
    return documento
}

export { encontrarDocumento, atualizarDocumento }