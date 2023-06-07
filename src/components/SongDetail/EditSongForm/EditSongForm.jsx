import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom'
import { updateSongRequest } from '../../../utilities/songs-api';

export default function EditSongForm({ song, setSong, setEditFormIsOpen }) {
    const navigate = useNavigate();
    const titleRef = useRef(song.title)
    const releaseYearRef = useRef(song.releaseYear)
    const ratingRef = useRef(song.rating)
    const nowShowingRef = useRef(song.nowShowing)
    const [error, setError] = useState('')
    async function handleSubmit(e) {
        e.preventDefault()
        const updatedSong = {
            title: titleRef.current.value,
            releaseYear: releaseYearRef.current.value,
            rating: ratingRef.current.value,
            nowShowing: nowShowingRef.current.checked
        }
        try {
            const newSong = await updateSongRequest(song._id, updatedSong)
            setSong(newSong)
            setEditFormIsOpen(false)
        } catch (err) {
            setError("Bad Update, Man")
        }
    }
    return (
        <>
            <h3>edit</h3>
            {error && <p>{JSON.stringify(error)}</p>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" ref={titleRef} defaultValue={song.title} />
                <label htmlFor="releaseYear">Release Year</label>
                <input type="number" id="releaseYear" ref={releaseYearRef} defaultValue={song.releaseYear} />
                <label htmlFor="rating">Rating</label>
                <select name="rating" id="rating" ref={ratingRef} defaultValue={song.rating}>
                    <option value="PG13">PG-13</option>
                    <option value="R">R</option>
                </select>
                <label htmlFor="nowShowing">Now Showing?</label>
                <input type="checkbox" id="nowShowing" defaultChecked={song.nowShowing} ref={nowShowingRef} />
                <button>Edit the Song</button>
            </form>
        </>
    )
}