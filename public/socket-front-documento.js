import { atualizaTextoEditor } from "./documento.js";

const socket = io();

function selecionarDocumento(nomeDocumento){
    socket.emit('selecionar_documento', nomeDocumento)
}

function emitirTextoEditor(texto_editor, nomeDocumento){
    socket.emit('texto_editor', texto_editor, nomeDocumento)
}

socket.on('texto_editor_clientes', (texto) => {
    atualizaTextoEditor(texto)
})

export { emitirTextoEditor, selecionarDocumento }