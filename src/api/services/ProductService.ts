import { prismaClient } from '../../database'

interface Product {
	name: string
	price: number
}

export default (() => {
	async function createProduct (productData: Product) {
		const { name, price } = productData
		await prismaClient.product.create({
			data: {
				name,
				price
			}
		})

		return { msg: 'Product created.' }
	}

	async function deleteProduct (productUUID: string) {
		await prismaClient.product.delete({
			where: {
				id: productUUID
			}
		})
		return { msg: 'Product deleted.' }
	}

	async function findOneProduct (productUUID: string) {
		const product = await prismaClient.product.findUnique({
			where: {
				id: productUUID
			}
		})
		return product
	}

	async function findAllProducts () {
		const products = await prismaClient.product.findMany()
		return products
	}

	async function updateProduct () {

	}

	return {
		createProduct,
		deleteProduct,
		findOneProduct,
		findAllProducts,
		updateProduct
	}
})()
