import { atualizaTextoEditor, tratarDeletarDocumento } from "./documento.js";

const socket = io();

function selecionarDocumento(nomeDocumento){
    socket.emit('selecionar_documento', nomeDocumento, (texto) => {
        atualizaTextoEditor(texto)
    })
}

function emitirTextoEditor(dados){
    socket.emit('texto_editor', dados)
}

function emitirDeletarDocumento(nomeDocumento){
    socket.emit('deletar_documento', nomeDocumento)
}

socket.on('texto_editor_clientes', (texto) => {
    atualizaTextoEditor(texto)
})

socket.on('tratar_deletar_documento_front', (dados) => {
    tratarDeletarDocumento(dados)
})


export { emitirTextoEditor, selecionarDocumento, emitirDeletarDocumento }