import routerx from 'express-promise-router';
import playerController from '../controllers/player';

const router = routerx();

router.post('/add', playerController.add);
router.get('/query', playerController.query);
router.get('/list', playerController.list);
router.delete('/remove', playerController.remove);


export default router;