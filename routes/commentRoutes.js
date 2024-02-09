const express = require('express');
const commentController = require('../controllers/commentController');
const router = express.Router();
const authMiddleware = require('../middleware/checkRole');

router.post('/', authMiddleware.checkAuthentication, commentController.create);

router.get('/food/:productName/comments', commentController.getCommentsForFood);


module.exports = (app) => {
  app.use('/api/comments', router);
};
