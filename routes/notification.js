const express = require('express');
const router = express.Router();

const {
  create,
  notificationById,
} = require('../controllers/notification');

const { requireSignin, isAuth, isAdmin } = require('../controllers/auth');

router.get('/note/:userId', notificationById);
router.post('/note/create/:senderId', requireSignin, isAuth, isAdmin, create);

module.exports = router;