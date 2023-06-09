const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    title: { type: String, required: true },
    servings: { type: Number, required: true },
    meal: { type: String, required: true },
    favorite: { type: Boolean, required: true },
    uploaded_by: { type: Schema.Types.ObjectId, ref: 'User' },
    // authors, reviews
    description: { type: String, required: true },
    ingredients: { type: String, required: true },
    instructions: { type: String, required: true }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Recipe', recipeSchema);