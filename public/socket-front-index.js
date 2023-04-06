const socket = io();
import { inserirLinkDocumento, removerLinkDocumento } from './index.js'

socket.emit('obter_documentos', (documentos) => {
    documentos.forEach(documento => {
        inserirLinkDocumento(documento.nome)
    })
})

function emitirAdicionarDocumento(nomeDocumento){
    socket.emit('adicionar_documento', nomeDocumento)
}

socket.on('adicionar_documento_interface', (nomeDocumento) => {
    inserirLinkDocumento(nomeDocumento)
})

socket.on('documento_existente', (nomeDocumento) => {
    alert(`O documento ${nomeDocumento} já existe`)
})

socket.on('tratar_deletar_documento_front', ({ sucesso, nomeDocumento }) => {
    removerLinkDocumento(nomeDocumento)
})

export {emitirAdicionarDocumento}