const controller = require('../controllers/employee.controller.js');

const express = require('express');
const router= express.Router();


router.get('/',controller.getAll);

router.get('/:id',controller.get);

router.post('/', controller.insert)

router.put('/:id',controller.update)

router.delete('/:id', controller.delete)

module.exports = router;