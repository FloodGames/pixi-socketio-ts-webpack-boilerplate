import { Loader } from "@pixi/loaders"

export async function loadGameAssets(): Promise<void> {
   return new Promise((res, rej) => {
      const loader = Loader.shared
      loader.add("rabbit", "./assets/simpleSpriteSheet.json")

      loader.onComplete.once(() => {
         res()
      })

      loader.onError.once(() => {
         rej()
      })

      loader.load()
   })
}
