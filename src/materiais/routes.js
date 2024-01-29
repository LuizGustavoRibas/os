const { Router } = require('express');
const controller = require('./controller')

const router = Router();

router.get('/', controller.getMateriais);
router.post("/", controller.addMateriais);
router.get('/:id', controller.getMateriaisById);
router.put("/:id", controller.updateMateriais);
router.delete('/:id', controller.removeMateriais);

module.exports = router;