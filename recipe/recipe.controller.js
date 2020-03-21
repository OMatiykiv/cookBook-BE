const { getRecipes, getRecipe, createRecipe, updateRecipe } = require('./recipe.services')
module.exports = { getRecipesController, getRecipeController, createRecipeController, updateRecipeController }

async function getRecipesController (req, res, next) {
  try {
    res.json(await getRecipes())
  } catch (e) {
    next(e)
  }
}

async function getRecipeController (req, res, next) {
  try {
    res.json(await getRecipe(req.params.id))
  } catch (e) {
    next(e)
  }
}

async function createRecipeController (req, res, next) {
  try {
    res.json(await createRecipe(req.body))
  } catch (e) {
    next(e)
  }
}

async function updateRecipeController (req, res, next) {
  try {
    res.json(await updateRecipe(req.body, req.params.id))
  } catch (e) {
    next(e)
  }
}