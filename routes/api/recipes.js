const express = require('express');
const router = express.Router();
const recipesController = require('../../controllers/api/recipes');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// BASE URL: /api/recipes
router.get('/', recipesController.index)
router.post('/', recipesController.create);
router.get('/:id', recipesController.detail);
router.delete('/:id', recipesController.deleteRecipe);
router.put('/:id', recipesController.update)

module.exports = router;