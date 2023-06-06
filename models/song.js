const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const songSchema = new Schema({
    title: { type: String, required: true },
    releaseYear: { type: Number, required: true },
    rating: { type: String, required: true },
    nowShowing: { type: Boolean, required: true },
    uploaded_by: { type: Schema.Types.ObjectId, ref: 'User' }
    // artists, reviews
}, {
    timestamps: true,
});

module.exports = mongoose.model('Song', songSchema);