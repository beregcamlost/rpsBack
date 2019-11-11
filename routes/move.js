import routerx from 'express-promise-router';
import moveController from '../controllers/move';

const router = routerx();

router.post('/add', moveController.add);
router.get('/query', moveController.query);
router.get('/list', moveController.list);
router.delete('/remove', moveController.remove);


export default router;