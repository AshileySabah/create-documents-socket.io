import io from "./servidor.js";
import {
  encontrarDocumento,
  atualizarDocumento,
  obterDocumentos,
  cadastrarDocumento,
  deletarDocumento,
} from "./documentosDb.js";

io.on("connection", (socket) => {
  socket.on("obter_documentos", async (devolverDocumentos) => {
    const documentos = await obterDocumentos();
    devolverDocumentos(documentos);
  });

  socket.on("adicionar_documento", async (nomeDocumento) => {
    const existeDocumento = (await encontrarDocumento(nomeDocumento)) !== null;

    if (existeDocumento) {
      socket.emit("documento_existente", nomeDocumento);
    } else {
      const resultado = await cadastrarDocumento(nomeDocumento);
      if (resultado.acknowledged) {
        io.emit("adicionar_documento_interface", nomeDocumento);
      }
    }
  });

  socket.on("deletar_documento", async (nomeDocumento) => {
    const resultado = await deletarDocumento(nomeDocumento);
    io.emit("tratar_deletar_documento_front", {
      sucesso: resultado.deletedCount,
      nomeDocumento,
    });
  });

  socket.on("selecionar_documento", async (nomeDocumento, devolverTexto) => {
    socket.join(nomeDocumento);
    const documento = await encontrarDocumento(nomeDocumento);
    if (documento) {
      devolverTexto(documento.texto);
    }
  });

  socket.on("texto_editor", async ({ texto, nomeDocumento }) => {
    const documento = await atualizarDocumento(nomeDocumento, texto);
    if (documento) {
      documento.texto = texto;
      socket.to(nomeDocumento).emit("texto_editor_clientes", texto);
    }
  });
});
