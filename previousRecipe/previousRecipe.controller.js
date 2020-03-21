const { getPreviousRecipe } = require('./previousRecipe.services')
module.exports = { getPreviousRecipeController }

async function getPreviousRecipeController (req, res, next) {
  try {
    res.json(await getPreviousRecipe(req.params.id))
  } catch (e) {
    next(e)
  }
}