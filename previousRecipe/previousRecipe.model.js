const mongoose = require('mongoose')
const Joi = require('joi')
const Schema = mongoose.Schema
const Types = mongoose.Types

const PreviousRecipeSchema = new Schema({
  recipe: {type: Types.ObjectId, ref:"Recipe", required: true},
  name: {type: String, required: true},
  author: {type: String, required: true},
  description: { type: String, required: true },
  published: {type: Date, default: Date.now()},
})

exports.PreviousRecipeSchema = mongoose.model('PreviousRecipe', PreviousRecipeSchema)