const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getIndex);

router.post('/add-item', shopController.postAddItem);

router.get('/get-items', shopController.getItems);

router.post('/buy-item', shopController.byuItem);

router.get('/not-available', shopController.notAvailable);

module.exports = router;