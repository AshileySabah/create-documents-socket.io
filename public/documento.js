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
})

function atualizaTextoEditor(texto){
  textoEditor.value = texto
}

function tratarDeletarDocumento({ sucesso, nomeDocumento: nome }){
  if(sucesso){
    if(nome === nomeDocumento){
      alert(`O documento ${nome} foi deletado`)
      window.location.href = '/'
    }
  }else{
    alert(`Houve um erro ao deletar o documento ${nome}`)
  }
}

export { atualizaTextoEditor, tratarDeletarDocumento }