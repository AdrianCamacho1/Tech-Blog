const router = require('express').Router();

const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');

router.user ('/users', userRoutes);
router.post('/posts', postRoutes);

module.exports = router;