import express from 'express'
import 'express-async-errors'
import bodyparser from 'body-parser'
import cors from 'cors'
import { router, path } from './routes'
import errorHandler from './errors/handler'

export default ((): express.Application => {
	const app: express.Application = express()

	app.use(bodyparser.urlencoded({ extended: false }))
	app.use(bodyparser.json())
	app.use(cors())
	app.use(path, router)
	app.use(errorHandler)

	return app
})()
