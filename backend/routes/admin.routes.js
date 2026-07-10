const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controller');
const verifyAdmin = require('../middleware/auth');

router.post('/login', adminController.login);

router.get('/orders', verifyAdmin, adminController.getOrders);
router.get('/orders/:id', verifyAdmin, adminController.getOrderDetails);
router.patch('/orders/:id/status', verifyAdmin, adminController.updateOrderStatus);
router.delete('/orders/:id', verifyAdmin, adminController.deleteOrder);
router.get('/statistics', verifyAdmin, adminController.getStatistics);

module.exports = router;
