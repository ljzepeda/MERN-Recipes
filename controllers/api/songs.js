const Movie = require('../../models/song')

module.exports = {
    index,
    create,
    detail,
    deleteSong,
    update
}

async function index(req, res) {
    try {
        const songs = await Song.find();
        res.status(200).json(songs)
    } catch (err) {
        res.status(400).json(err)
    }
}

async function create(req, res) {
    try {
        req.body.uploaded_by = req.user._id;
        const newSong = await Song.create(req.body);
        res.status(201).json(newMovie)
    } catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
}

async function detail(req, res) {
    try {
        const song = await Song.findById(req.params.id)
        res.status(200).json(movie)
    } catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
}

async function deleteSong(req, res) {
    try {
        await Song.findByIdAndDelete(req.params.id)
        res.status(200).json({
            data: 'success'
        })
    } catch (err) {
        res.status(400).json(err)
    }
}

async function update(req, res) {
    try {
        const updatedSong = await Song.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json(updatedMovie)
    } catch (err) {
        console.log(err);
        res.status(400).json('Bad Request')
    }
}