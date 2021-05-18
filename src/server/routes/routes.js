import express from "express"

export const router = express.Router()

//https://auth0.com/blog/refresh-tokens-what-are-they-and-when-to-use-them/

// if we run http://localhost:3000/status we can see that the server works!
router.get("/status", (req, res, next) => {
   res.status(200).json({ status: "ok" })
   console.log("client reached here")
})
