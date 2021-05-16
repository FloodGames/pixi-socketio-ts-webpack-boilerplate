import { Texture } from "@pixi/core"
import { AnimatedSprite } from "@pixi/sprite-animated"
import { gameHeight, gameWidth } from "."
import { UNITSTATS } from "../shared/constants"

export class BirdClass extends AnimatedSprite {
   constructor(public hp: number, public dmg: number) {
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

      return this
   }
}
