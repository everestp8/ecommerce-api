import express from 'express'
import ProductController from '../api/controllers/ProductController'

const router = express.Router()
const path: string = '/api'

router.post('/create-product', ProductController.createProduct)
router.delete('/delete-product/:id', ProductController.deleteProduct)
router.get('/find-one-product/:id', ProductController.findOneProduct)
router.get('/find-all-products', ProductController.findAllProducts)
router.put('/update-product/:id', ProductController.updateProduct)

export { router, path }
