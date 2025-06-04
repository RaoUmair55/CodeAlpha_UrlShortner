import express from 'express';

const router = express.Router();
import { createShortUrl, getOriginalUrl } from '../controllers/urlControllers.js';

router.post('/', createShortUrl);
router.get('/:shortCode', getOriginalUrl);

export default router;