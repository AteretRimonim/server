const controller = require('../controllers/user.controller.js');

const express = require('express');
const router= express.Router();

router.get('/',controller.getAll);

router.get('/:id',controller.get);

router.post('/', controller.insert)

router.put('/:id', controller.update)

router.delete('/:id', controller.delete)

router.post("/login", controller.login);

module.exports = router;
