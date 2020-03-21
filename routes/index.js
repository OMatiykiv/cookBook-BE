const express = require('express')
const router = express.Router()
const recipeRoutes = require('./recipe.routes')
const previousRecipeRoutes = require('./previousRecipe.routes')

router.use('/recipe', recipeRoutes)
router.use('/previous', previousRecipeRoutes)

module.exports = router