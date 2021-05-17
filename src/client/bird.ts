import { Texture } from "@pixi/core"
import { Container } from "@pixi/display"
import { AnimatedSprite } from "@pixi/sprite-animated"
import { UNITSTATS } from "../shared/constants"
import { gameHeight, gameWidth } from "./resizeCanvas"

export class BirdClass extends AnimatedSprite {
   hp: number
   dmg: number
   constructor(stage: Container) {
      super([Texture.from("birdUp.png"), Texture.from("birdMiddle.png"), Texture.from("birdDown.png")])
      this.loop = true
      this.animationSpeed = 0.1
      this.play()
      this.scale.set(4)
      this.anchor.set(0.5, 0.5)
      this.position.set(gameWidth / 2, gameHeight / 2)
      this.hp = UNITSTATS.hp
      this.dmg = UNITSTATS.dmg
      console.log(`Bird has ${this.hp} hp and ${this.dmg} dmg`)
      stage.addChild(this)
      return this
   }
}
