import { app } from "."
import { TILE } from "../shared/constants"
import { BirdClass } from "./bird"
import { SnekContainer } from "./snek"
import { createTent } from "./tent"

// export let stage  //global, useful

export function runStage(): void {
   const stage = app.stage

   console.log(`Our game has ${TILE.COLUMNS} columns and ${TILE.ROWS} rows`) //test: external shared data on client and server

   new BirdClass(stage) //test: extended spriteClass

   new SnekContainer(stage) //test: png manioulation

   createTent() //test: spine

   testErrorsInTypescript()
}

function testErrorsInTypescript(faulty = 5) {
   return faulty * 3
}
