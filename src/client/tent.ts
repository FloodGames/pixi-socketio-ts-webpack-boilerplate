import { Loader } from "@pixi/loaders"
import { ISkeletonData, Spine } from "pixi-spine"
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
   // console.log(res.Medic_Tents.spineData)
   // const spineData = loader.resources.Medic_Tents.spineData
   new TentSpine(res.Medic_Tents.spineData)
   addTent(res.Medic_Tents.spineData)
}

//add a spine as a function
export function addTent(spineData: ISkeletonData): Spine {
   const tentSpine = new Spine(spineData)
   tentSpine.x = gameWidth / 1.5 // set the position
   tentSpine.y = gameHeight / 2 // set the position
   tentSpine.state.setAnimation(0, "idle1", true) // play animation
   app.stage.addChild(tentSpine) //need to render before animating??
   return tentSpine
}

//add a spine as a class
export class TentSpine extends Spine {
   constructor(spineData: ISkeletonData) {
      super(spineData)
      this.x = gameWidth / 1.5 // set the position
      this.y = gameHeight / 1.5 // set the position
      this.state.setAnimation(0, "idle1", true)
      app.stage.addChild(this) //need to render before animating??
   }
}
