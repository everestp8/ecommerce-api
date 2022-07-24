import { ErrorRequestHandler, Request, Response, NextFunction } from 'express'

export default (err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
	res.status(500).json({ error: true, msg: err.toString() })
}
