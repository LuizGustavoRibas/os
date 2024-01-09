const { Router } = require('express');
const controller = require('./controller')

const router = Router();

router.get('/', controller.getClientes);
router.post("/", controller.addClientes);
router.get('/:id', controller.getClientesById);
router.put("/:id", controller.updateClientes);
router.delete('/:id', controller.removeClientes);

module.exports = router;