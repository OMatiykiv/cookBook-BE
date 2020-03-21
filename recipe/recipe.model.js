const mongoose = require('mongoose')
const Joi = require('joi')
const Schema = mongoose.Schema

const RecipeSchema = new Schema({
  name: {type: String, required: true},
  author: {type: String, required: true},
  description: { type: String, required: true },
  published: {type: Date, default: Date.now()}
})

const schema = {
  name: Joi.string().required(),
  author: Joi.string().required(),
  description: Joi.string().required(),
  published: Joi.date()
}

exports.schemaJoiRecipe = schema
exports.RecipeSchema = mongoose.model('Recipe', RecipeSchema)