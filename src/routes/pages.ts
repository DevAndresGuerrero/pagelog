import { Router } from 'express';
import { pageController } from '../controllers/pageController';

const router: Router = Router();

router.get('/', pageController.index);
router.get('/add', pageController.create);

export default router;