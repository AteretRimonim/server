const controller = require('../controllers/employee.controller.js');

const express = require('express');
const router= express.Router();


router.get('/',controller.getAll);

router.get('/:idParam',controller.get);

router.post('/', controller.insert)

router.put('/:idParam', controller.update)

router.delete('/:idParam', controller.delete)

module.exports = router;