import { Router } from 'express';
import AuthMiddleware from '../middlewares/auth.middleware';
import Middleware from '../middlewares/request';
import asyncHandler from '../middlewares/asynchandler';
import RequestsController from '../controllers/requests';
import TripsValidation from '../middlewares/validations/tripValidations';

const router = new Router();

router.post(
  '/multi-city',
  AuthMiddleware.checkToken,
  TripsValidation.multiCity,
  asyncHandler(RequestsController.createMultiCity)
);

router.get('/open', AuthMiddleware.checkToken, asyncHandler(RequestsController.getOpenRequests));
router.get(
  '/open/:id',
  AuthMiddleware.checkToken,
  asyncHandler(RequestsController.updateOpenRequests)
);

router.get(
  '/:id',
  AuthMiddleware.checkToken,
  Middleware.getRequest,
  asyncHandler(RequestsController.getRequest)
);
router.delete(
  '/:id',
  AuthMiddleware.checkToken,
  Middleware.getRequest,
  asyncHandler(RequestsController.deleteRequest)
);
router.get('/', AuthMiddleware.checkToken, asyncHandler(RequestsController.getRequests));

// router.patch('/open', asyncHandler(RequestsController.updateOpenRequests));

export default router;
