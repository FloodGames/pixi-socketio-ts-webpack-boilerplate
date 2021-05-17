import * as PIXI from "pixi.js"
import "./css/style.css"
import { exampleFunction } from "./functions/exampleFunction"
import { loader, loadGameAssets } from "./loadAssets"
import { gameHeight, gameWidth, resizeCanvas } from "./resizeCanvas"
import { runStage } from "./stage"

declare const VERSION: string
console.log(`Welcome to Ultimate Multiplayer Game ${VERSION}`)

exampleFunction(2) //example external functions with auto-import

export const app = new PIXI.Application({
   backgroundColor: 0xd3d3d3,
   width: gameWidth,
   height: gameHeight,
}) //start PixiJS renderer

window.onload = async (): Promise<void> => {
   await loadGameAssets()
   console.log("loader", loader)

   document.body.appendChild(app.view) // purpose?

   resizeCanvas(app, gameWidth, gameHeight)

   runStage()
}

declare global {
   interface Window {
      app: PIXI.Application
      gameWidth: number
      gameHeight: number
   }
}
window.app = app // so you can always check in console browser
window.gameHeight = gameHeight
window.gameWidth = gameWidth
