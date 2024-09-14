import express from 'express';
import { ProductController } from './products.controller';
import validationRequest from '../../utills/validationRequest';
// import { BookingController } from '../booking/booking.controller';
import productsValidation from './products.validation';

const router = express.Router();

router.post(
  '/',
  validationRequest(productsValidation.productCreateValidationSchema),
  ProductController.createProduct,
);

router.get('/', ProductController.getAllProduct);
router.get('/search', ProductController.FindProductWithParam);
router.get('/:id', ProductController.getSingleProduct);
router.put('/bulk-update', ProductController.updateManyProduct,
);
router.put(
  '/:id',
  validationRequest(productsValidation.productUpdateValidationSchema),
  ProductController.updateSingleProduct,
);
router.delete('/:id', ProductController.deleteSingleProduct);

export const ProductRoute = router;
