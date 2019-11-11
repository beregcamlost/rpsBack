import routerx from 'express-promise-router';
import gameController from '../controllers/game';

const router = routerx();

router.post('/add', gameController.add);
router.get('/query', gameController.query);
router.get('/list', gameController.list);
router.delete('/remove', gameController.remove);


export default router;