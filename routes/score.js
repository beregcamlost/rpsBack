import routerx from 'express-promise-router';
import scoreController from '../controllers/score';

const router = routerx();

router.post('/add', scoreController.add);
router.get('/query', scoreController.query);
router.get('/list', scoreController.list);
router.delete('/remove', scoreController.remove);


export default router;