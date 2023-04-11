import io from "./servidor.js";
import registrarEventosInicio from "./registrarEventos/registrarEventosInicio.js";
import registrarEventosDocumento from "./registrarEventos/registrarEventosDocumento.js";

io.on("connection", (socket) => {
  registrarEventosInicio(socket, io);
  registrarEventosDocumento(socket, io);
});
