import {Router} from 'express'
import app from '../model/api/dataWarung.js'

const router = Router()

router.use("/api", app)

export default router