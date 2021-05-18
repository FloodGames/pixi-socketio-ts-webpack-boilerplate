// Learn more about this file at: https://victorzhou.com/blog/build-an-io-game-part-1/#4-client-networking
import openSocket from "socket.io-client"

export let socketID

const hostLocation = window.location.host ? window.location.host : "eeki.io" //default connection eeki.io
console.log(`connecting to hostLocation: ${hostLocation} 💡`)
export const transferProtocol =
   process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test" ? "http" : "https"

//socket connect with HTTP = ws, HTTPS = wss
export const socket =
   process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test"
      ? openSocket(`ws://${hostLocation}`, { reconnection: true })
      : openSocket(`wss://${hostLocation}`, { reconnection: true })

const connectedPromise = new Promise((resolve, reject) => {
   socket.on("connect", () => {
      console.log("Connected to server! 🚀🚀🚀")
      resolve()
   })
   socket.on("error", () => reject("connection error 💥❌"))
})

// //General socket.io event listeners
// export const connectToServer = (game) =>
//    connectedPromise.then(() => {
//       console.log("connected sockets", socket)
//       socketID = socket.id
//       socket.on(MSG_TYPES.ERROR, (data) => getError(game, data))
//       socket.on(MSG_TYPES.SUCCESS, getSuccessMessage)
//    })
