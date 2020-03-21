const { PreviousRecipeSchema } = require('./previousRecipe.model')
const Joi = require('joi')

async function getPreviousRecipe (id) {
  const recipes = await PreviousRecipeSchema.find({ recipe: id})
  return recipes
}

exports.getPreviousRecipe = getPreviousRecipe