import Router from "express"

const router = Router()
// Importing Controllers
import { generateUrl, redirectUser } from "../Controller/urlController.js"

// Creating Rout to generate Get URL
router.post("/api/create",generateUrl)

// To redirect user to url
router.get("/:id",redirectUser)

export default router;