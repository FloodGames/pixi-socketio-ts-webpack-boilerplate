import express, { Application, Request, Response } from "express"
import helmet from "helmet"
import { webpack } from "webpack"
import webpackDevMiddleware from "webpack-dev-middleware" //dev specific
import { webpackConfig } from "../webpack.dev" //dev specific
import { router } from "./routes/routes"
import { Server as socketio } from "socket.io"
import { addSockets } from "./addListeners"

const app: Application = express()
const port = 3000

// Body parsing Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Develop setup Webpack, needed for realtime compilation of the client files
const compiler = webpack(webpackConfig)
app.use(webpackDevMiddleware(compiler))

serveAssets(app) //serve assets to client

app.get("/", async (req: Request, res: Response): Promise<Response> => {
   return res.status(200).send({
      message: "Hello World!",
   })
})

let serverPort
try {
   serverPort = app.listen(port, (): void => {
      console.log(`Connected successfully on port ${port}`)
   })
} catch (error) {
   console.error(`Error occured: ${error.message}`)
}

app.use(helmet()) //Security helmet layer

app.use("/", router) //main routes

// catch all other routes
app.use((req, res, next) => {
   res.status(404)
   res.json({ message: "404 - Not Found" })
})

const io = new socketio(serverPort, {
   serveClient: true,
}) // extra stuff to prevent serving socket.io-client!

//Request the socket.io server
// app.use(function (req, res, next) {
//    req.io = io
//    req.game = game
//    next()
// })

addSockets(io)

// startGameServer(io)

//setinterval console log to client every 10s

function serveAssets(app: Application, assetDirectory = "assets/") {
   // app.use("/static", express.static("public/assets")) //somehow need to serve online same as offline...
   app.use("/assets", express.static(assetDirectory)) //how the server should find assets to serve to the clients
   console.log(`Serving assets from assetDirectory: ${assetDirectory}`)
}
