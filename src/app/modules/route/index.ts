import { BookingRoute } from '../booking/booking.route';
import express from 'express';
import { ProductRoute } from '../products/products.route';

const router = express.Router();
const moduleRoute = [
  {
    path: '/products',
    route: ProductRoute,
  },
  {
    path: '/bookings',
    route: BookingRoute,
  },
];

moduleRoute.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
