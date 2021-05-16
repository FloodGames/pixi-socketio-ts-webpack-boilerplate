import { Application } from "@pixi/app"

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
