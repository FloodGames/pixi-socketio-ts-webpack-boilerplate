import { Spine } from "@pixi-spine/all-3.8"
import { Loader } from "@pixi/loaders"
import { app } from "."
import { gameHeight, gameWidth } from "./resizeCanvas"

export function createTent(): void {
   app.loader
      .add("Medic_Tents", "./assets/Medic_Tent.json") // load spine data example
      .load(onAssetsLoaded)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function onAssetsLoaded(loader: Loader, res: any) {
   console.log("res:", res)
   console.log("Loader:", loader.resources)
   // const spineData = loader.resources.Medic_Tents.spineData
   // const tentSpine = new Spine(spineData)
   const tentSpine = new Spine(res.Medic_Tents.spineData)
   tentSpine.x = gameWidth / 1.5 // set the position
   tentSpine.y = gameHeight / 2 // set the position
   tentSpine.state.setAnimation(0, "idle1", true) // play animation
   app.stage.addChild(tentSpine) //need to render before animating??
   return tentSpine
}

// export function addTent(stage: Container): SpineBase {
//    console.log("Loader:", loader.resources)
//    const spineData = loader.resources.Medic_Tents.spineData
//    const tentSpine = new Spine(spineData)
//    tentSpine.x = gameWidth / 1.5 // set the position
//    tentSpine.y = gameHeight / 2 // set the position
//    tentSpine.state.setAnimation(0, "idle1", true) // play animation
//    stage.addChild(tentSpine) //need to render before animating??
//    return tentSpine
// }

// dont know how to extend Spine
// export class TemtClass extends SpineBase {
//    constructor() {
//       super(loader.resources.Medic_Tents.spineData)
//       this.x = gameWidth / 1.5 // set the position
//       this.y = gameHeight / 2 // set the position
//       this.state.setAnimation(0, "idle1", true)
//       app.stage.addChild(this) //need to render before animating??
//    }
// }
