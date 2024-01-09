const { Router } = require('express');
const controller = require('./controller')

const router = Router();

router.get('/', controller.getOs);
router.post("/", controller.addOs);
router.get('/:id', controller.getOsById);
router.put("/:id", controller.updateOs);
router.delete('/:id', controller.removeOs);

module.exports = router;