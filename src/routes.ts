import { Router } from "express";
import multer from 'multer';


import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoriesController } from "./controllers/category/ListCategoriesController";
import { CreateProductController } from "./controllers/products/CreateProductController";


import { isAuthenticated } from "./middlewares/isAuthenticated";
import uploadConfig from './config/multer'
import { ListByCategoryController } from "./controllers/products/ListByCategoryController";
import { CreateOrderController } from "./controllers/orders/CreateOrderController";
import { RemoveOrderController } from "./controllers/orders/RemoveOrderController";


const router = Router();
const upload = multer(uploadConfig.upload("./tmp"));

// -- USER ROUTES --
router.post('/users', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/me', isAuthenticated, new DetailUserController().handle);
// -- CATEGORY ROUTES --
router.post('/category', isAuthenticated, new CreateCategoryController().handle);
router.get('/category', isAuthenticated, new ListCategoriesController().handle);
// -- PRODUCTS ROUTES --
router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle);
router.get('/category/product', isAuthenticated, new ListByCategoryController().handle);
//-- ORDER ROUTES --
router.post('/order', isAuthenticated, new CreateOrderController().handle);
router.delete('/order', isAuthenticated, new RemoveOrderController().handle);

export { router };