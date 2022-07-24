import { Request, Response, NextFunction } from 'express'
import ProductService from '../services/ProductService'

export default (() => {
	async function createProduct (req: Request, res: Response, next: NextFunction) {
		const { name, price } = req.body
		const message = await ProductService.createProduct({
			name,
			price
		})
		return res.status(201).json(message)
	}

	async function deleteProduct (req: Request, res: Response, next: NextFunction) {
		const { id } = req.params
		const message = await ProductService.deleteProduct(id)
		return res.status(200).json(message)
	}

	async function findOneProduct (req: Request, res: Response, next: NextFunction) {
		const { id } = req.params
		const message = await ProductService.findOneProduct(id)
		return res.status(200).json(message)
	}

	async function findAllProducts (req: Request, res: Response, next: NextFunction) {
		const products = await ProductService.findAllProducts()
		return res.status(200).json(products)
	}

	async function updateProduct (req: Request, res: Response, next: NextFunction) {
		return res.status(200).json({ hello: 'world' })
	}

	return {
		createProduct,
		deleteProduct,
		findOneProduct,
		findAllProducts,
		updateProduct
	}
})()
