import { MSG_TYPES } from "../shared/constants"

export function addSockets(io) {
   //Listen for socket.io connections, is een callback pas op voor parameter volgorde!!
   //meer info https://marijnophorst.com/2018/05/08/socket-io-ur-doing-it-wrong/
   io.on("connection", (socket) => {
      console.log("Player connected!", socket.id)
      socket.on(MSG_TYPES.JOIN_GAME, (data) => addPlayerToGameServer(data))
   })
}

function addPlayerToGameServer(data) {
   console.log("addPlayerToGameServer", data)
}
