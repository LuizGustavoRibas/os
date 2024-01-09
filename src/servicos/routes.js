const { Router } = require('express');
const controller = require('./controller')

const router = Router();

router.get('/', controller.getServicos);
router.post("/", controller.addServicos);
router.get('/:id', controller.getServicosById);
router.put("/:id", controller.updateServicos);
router.delete('/:id', controller.removeServicos);

module.exports = router;