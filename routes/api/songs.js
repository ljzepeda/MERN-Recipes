const express = require('express');
const router = express.Router();
const songsController = require('../../controllers/api/songs');
//const ensureLoggedIn = require('../../config/ensureLoggedIn')

// BASE URL: /api/songs
router.get('/', songsController.index)
router.post('/', songsController.create);
router.get('/:id', songsController.detail);
router.delete('/:id', songsController.deleteSong);
router.put('/:id', songsController.update)

module.exports = router;