import { emitirTextoEditor, selecionarDocumento, emitirDeletarDocumento } from "./socket-front-documento.js"

const parametros = new URLSearchParams(window.location.search)
const nomeDocumento = parametros.get("nome")

const textoEditor = document.getElementById('editor-texto')
const tituloDocumento = document.getElementById('titulo-documento')

tituloDocumento.textContent = nomeDocumento || "Documento sem titulo";

const botaoExcluir = document.getElementById('excluir-documento')

selecionarDocumento(nomeDocumento)

textoEditor.addEventListener('keyup', () => {
  emitirTextoEditor({
    texto: textoEditor.value,
    nomeDocumento
  })
})

botaoExcluir.addEventListener('click', () => {
  emitirDeletarDocumento(nomeDocumento)
  window.location.href = 'index.html'
})

function atualizaTextoEditor(texto){
  textoEditor.value = texto
}

export { atualizaTextoEditor }