import * as PIXI from "pixi.js"
import { exampleFunction } from "./functions/exampleFunction"
import { loadGameAssets } from "./loadGameAssets"
import { resizeCanvas } from "./resizeCanvas"
import { runStage } from "./stage"
import "./css/style.css"

declare const VERSION: string
console.log(`Welcome to Ultimate Multiplayer Game ${VERSION}`)

exampleFunction(2) //example external functions with auto-import

testErrorsInTypescript()

//start PixiJS renderer
export const gameWidth = 800 //global variable
export const gameHeight = 800 //global variable
const app = new PIXI.Application({
   backgroundColor: 0xd3d3d3,
   width: gameWidth,
   height: gameHeight,
})

window.onload = async (): Promise<void> => {
   await loadGameAssets()

   document.body.appendChild(app.view)

   resizeCanvas(app, gameWidth, gameHeight)

   runStage(app)
}

function testErrorsInTypescript(faulty = 5) {
   return faulty * 3
}
