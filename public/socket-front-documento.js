import { atualizaTextoEditor } from "./documento.js";

const socket = io();

function selecionarDocumento(nomeDocumento){
    socket.emit('selecionar_documento', nomeDocumento)
}

function emitirTextoEditor(dados){
    socket.emit('texto_editor', dados)
}

socket.on('texto_editor_clientes', (texto) => {
    atualizaTextoEditor(texto)
})

export { emitirTextoEditor, selecionarDocumento }