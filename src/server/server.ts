import express, { Application, Request, Response } from "express"
import { webpack } from "webpack"
import webpackDevMiddleware from "webpack-dev-middleware" //dev specific
import { webpackConfig } from "../webpack.dev" //dev specific

const app: Application = express()
const port = 3000

// Body parsing Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Develop setup Webpack, needed for realtime compilation (?)
const compiler = webpack(webpackConfig)
app.use(webpackDevMiddleware(compiler))

serveAssets(app)

app.get("/", async (req: Request, res: Response): Promise<Response> => {
   return res.status(200).send({
      message: "Hello World!",
   })
})

try {
   app.listen(port, (): void => {
      console.log(`Connected successfully on port ${port}`)
   })
} catch (error) {
   console.error(`Error occured: ${error.message}`)
}

//setinterval console log to client every 10s

function serveAssets(app: Application, assetDirectory = "assets/") {
   // app.use("/static", express.static("public/assets")) //somehow need to serve online same as offline...
   app.use("/assets", express.static(assetDirectory)) //how the server should find assets to serve to the clients
   console.log(`Serving assets from assetDirectory: ${assetDirectory}`)
}
