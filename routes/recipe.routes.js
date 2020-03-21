const express = require('express')
const router = express.Router()
const recipeController = require('../recipe/recipe.controller')

router.get('/', recipeController.getRecipesController)
router.get('/:id', recipeController.getRecipeController)
router.post('/', recipeController.createRecipeController)
router.put('/:id', recipeController.updateRecipeController)

module.exports = router