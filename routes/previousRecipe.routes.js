const express = require('express')
const router = express.Router()
const previousRecipeController = require('../previousRecipe/previousRecipe.controller')

router.get('/:id', previousRecipeController.getPreviousRecipeController)

module.exports = router