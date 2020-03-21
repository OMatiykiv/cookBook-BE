const { RecipeSchema, schemaJoiRecipe } = require('./recipe.model')
const { PreviousRecipeSchema } = require('../previousRecipe/previousRecipe.model')
const Joi = require('joi')

async function getRecipes () {
  const recipes = await RecipeSchema.find()
  return recipes
}

async function getRecipe (id) {
  const recipe = await RecipeSchema.findOne({ _id: id})
  return recipe
}

async function recipeValidation (body) {
  const { error } = Joi.validate(body, schemaJoiRecipe)
  if (error) throw new Error('Bad Request')
}
async function createRecipe (body) {
  await recipeValidation(body)
  body.published = Date.now()
  const recipe = await RecipeSchema.create(body)
  body.recipe = recipe._id
  await PreviousRecipeSchema.create(body)
  return body
}

async function isExist (body) {
  if (!body) throw new Error('Recipe does not exist')
}
async function updateRecipe (body, id) {
  await recipeValidation(body)
  const recipe = await RecipeSchema.findOne({ _id: id })
  await isExist(recipe)
  body.published = Date.now()
  await RecipeSchema.updateOne({ _id: id }, body)
  body.recipe = id
  await PreviousRecipeSchema.create(body)
  return body
}

exports.getRecipes = getRecipes
exports.getRecipe = getRecipe
exports.createRecipe = createRecipe
exports.updateRecipe = updateRecipe