import { ErrorRequestHandler, Request, Response, NextFunction } from 'express'

export default (err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
	console.log(err)
	res.status(500).json({ error: true })
}