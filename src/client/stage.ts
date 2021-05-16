import { Application } from "@pixi/app"
import { TILE, UNITSTATS } from "../shared/constants"
import { BirdClass } from "./bird"

export function runStage(app: Application): void {
   const stage = app.stage

   console.log(`Our game has ${TILE.COLUMNS} columns and ${TILE.ROWS} rows`) //external shared data on client and server

   const birdFromSprite = new BirdClass(UNITSTATS.hp, UNITSTATS.dmg)

   stage.addChild(birdFromSprite)
}
