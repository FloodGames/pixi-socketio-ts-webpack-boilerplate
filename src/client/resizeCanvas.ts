import { Application } from "@pixi/app"

export const aspectRatio = 16 / 9
export const gameWidth = 800 //global variable
export const gameHeight = 800 //global variable

export function resizeCanvas(app: Application, gameWidth: number, gameHeight: number): void {
   const resize = () => {
      console.log("resizing canvas")
      app.renderer.resize(window.innerWidth, window.innerHeight)
      app.stage.scale.x = window.innerWidth / gameWidth
      app.stage.scale.y = window.innerHeight / gameHeight
   }

   resize()

   window.addEventListener("resize", resize) //resize game on resize window
}
