import express from 'express'
import router from './route.js'
import logger from 'morgan'
const application = express()

export function start(){
    application.use(router)
    application.use(logger('combined'))
    application.listen(9999, ()=>{
        console.log("app listen on port 9000")
    })
}
