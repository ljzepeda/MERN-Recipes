const Recipe = require('../../models/recipe')

module.exports = {
    index,
    create,
    detail,
    deleteRecipe,
    update
}

async function index(req, res) {
    try {
        const recipes = await Recipe.find();
        res.status(200).json(recipes)
    } catch (err) {
        res.status(400).json(err)
    }
}

async function create(req, res) {
    try {
        req.body.uploaded_by = req.user._id;
        const newRecipe = await Recipe.create(req.body);
        res.status(201).json(newRecipe)
    } catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
}

async function detail(req, res) {
    try {
        const recipe = await Recipe.findById(req.params.id)
        res.status(200).json(recipe)
    } catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
}

async function deleteRecipe(req, res) {
    try {
        await Recipe.findByIdAndDelete(req.params.id)
        res.status(200).json({
            data: 'success'
        })
    } catch (err) {
        res.status(400).json(err)
    }
}

async function update(req, res) {
    try {
        const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json(updatedRecipe)
    } catch (err) {
        console.log(err);
        res.status(400).json('Bad Request')
    }
}