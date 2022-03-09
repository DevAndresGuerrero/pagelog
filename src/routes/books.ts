import { Router } from 'express';
import { bookController } from '../controllers/bookController';

const router: Router = Router();

router.get('/', bookController.index);
router.get('/add', bookController.create);
router.post('/add', bookController.store);

export default router;