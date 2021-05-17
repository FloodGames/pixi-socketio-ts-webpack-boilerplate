import { Loader } from "@pixi/loaders"

export const loader = Loader.shared //contains the mighty loader.resources property with everything inside

export async function loadGameAssets(): Promise<void> {
   return new Promise((res, rej) => {
      loader.add("bird", "./assets/simpleSpriteSheet.json")

      loader.add("snek", "./assets/snake.png")

      loader.add("Medic_Tents", "./assets/Medic_Tent.json") // load spine data example
      // const customSpineAtlas = new PIXI.spine.core.TextureAtlas();
      // "./assets/Medic_Tent@sd.atlas"
      // loader.add("spineCharacter", "spine_character.json", {
      //    metadata: { spineAtlas: customSpineAtlas },
      // }) //https://github.com/pixijs/spine/blob/master/examples/dynamic_texture_atlas.md

      loader.onComplete.once(() => {
         res()
      })

      loader.onError.once(() => {
         rej()
      })

      loader.load()
   })
}
