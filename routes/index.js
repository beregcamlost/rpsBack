import routerx from 'express-promise-router';
import gameRouter from './game';
import playerRouter from './player';
import scoreRouter from './score';
import moveRouter from './move';

const router = routerx();

router.use('/game', gameRouter);
router.use('/player', playerRouter);
router.use('/score', scoreRouter);
router.use('/move', moveRouter);

export default router;