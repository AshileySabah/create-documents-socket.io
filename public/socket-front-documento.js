import { atualizaTextoEditor } from "./documento.js";

const socket = io();

function emitirTextoEditor(texto_editor){
    socket.emit('texto_editor', texto_editor)
}

socket.on('texto_editor_clientes', (texto) => {
    atualizaTextoEditor(texto)
})

export { emitirTextoEditor }