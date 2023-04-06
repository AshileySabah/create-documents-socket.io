const socket = io();
import {inserirLinkDocumento} from './index.js'

socket.emit('obter_documentos', (documentos) => {
documentos.forEach(documento => {
    inserirLinkDocumento(documento.nome)
})
})