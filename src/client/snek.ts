import { Texture } from "@pixi/core"
import { Container } from "@pixi/display"
import { Point } from "@pixi/math"
import { SimpleRope } from "@pixi/mesh-extras"
import { app } from "."
import { gameHeight, gameWidth } from "./resizeCanvas"

export class SnekContainer extends Container {
   //    hp: number
   //    dmg: number
   constructor(stage: Container) {
      super()
      let count = 0

      // build a rope!
      const ropeLength = 918 / 20

      const points = [new Point()] //new Array<typeof Point>()

      for (let i = 0; i < 20; i++) {
         points.push(new Point(i * ropeLength, 0))
      }

      const strip = new SimpleRope(Texture.from("snek"), points)
      strip.x = -459
      this.addChild(strip)

      this.x = gameWidth / 4
      this.y = gameHeight / 2

      this.scale.set(0.25)

      stage.addChild(this)

      console.log(this)

      app.ticker.add(() => {
         count += 0.1

         // make the snake
         for (let i = 0; i < points.length; i++) {
            points[i].y = Math.sin(i * 0.5 + count) * 30
            points[i].x = i * ropeLength + Math.cos(i * 0.3 + count) * 20
         }
      })
   }
}
