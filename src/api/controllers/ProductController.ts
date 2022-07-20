import { Request, Response, NextFunction } from 'express'
import ProductService from '../services/ProductService'

export default (() => {
	async function createProduct (req: Request, res: Response, next: NextFunction) {
		try {
			const { name, price } = req.body
			const message = await ProductService.createProduct({
				name,
				price
			})
			res.status(201).json(message)
		} catch (err) {
			next(err)
		}
	}

	async function deleteProduct (req: Request, res: Response, next: NextFunction) {
		try {
			const { id } = req.params
			const message = await ProductService.deleteProduct(id)
			res.status(200).json(message)
		} catch (err) {
			next(err)
		}
	}

	async function findOneProduct (req: Request, res: Response, next: NextFunction) {
		try {
			res.status(200).json({ hello: 'world' })
		} catch (err) {
			next(err)
		}
	}

	async function findAllProducts (req: Request, res: Response, next: NextFunction) {
		try {
			const products = await ProductService.findAllProducts()
			res.status(200).json(products)
		} catch (err) {
			next(err)
		}
	}

	async function updateProduct (req: Request, res: Response, next: NextFunction) {
		try {
			res.status(200).json({ hello: 'world' })
		} catch (err) {
			next(err)
		}
	}

	return {
		createProduct,
		deleteProduct,
		findOneProduct,
		findAllProducts,
		updateProduct
	}
})()
