import { useRef, useState } from 'react';
import { createSongRequest } from '../../utilities/songs-api';
import { useNavigate, useParams } from "react-router-dom";

export default function NewSongForm() {
    const navigate = useNavigate();
    const titleRef = useRef('')
    const releaseYearRef = useRef('')
    const ratingRef = useRef('')
    const nowShowingRef = useRef('')
    const [error, setError] = useState('')
    async function handleSubmit(e) {
        e.preventDefault()
        setError('')
        const newSong = {
            title: titleRef.current.value,
            releaseYear: releaseYearRef.current.value,
            rating: ratingRef.current.value,
            nowShowing: nowShowingRef.current.checked
        }
        try {
            const newSongResponse = await createSongRequest(newSong)
            navigate('/songs')
        } catch (err) {
            setError(err)
        }

    }
    return (
        <>
            {error && <p>{JSON.stringify(error)}</p>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" ref={titleRef} />
                <label htmlFor="releaseYear">Release Year</label>
                <input type="number" id="releaseYear" ref={releaseYearRef} />
                <label htmlFor="rating">Rating</label>
                <select name="rating" id="rating" ref={ratingRef}>
                    <option value="PG13">PG-13</option>
                    <option value="R">R</option>
                </select>
                <label htmlFor="nowShowing">Now Showing?</label>
                <input type="checkbox" id="nowShowing" ref={nowShowingRef} />
                <button>Create the Song</button>
            </form>
        </>

    )
}