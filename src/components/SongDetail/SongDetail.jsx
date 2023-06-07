import { useState } from 'react'
import EditSongForm from './EditSongForm/EditSongForm'
export default function SongDetail({ song, handleDelete, setSong }) {
    const [editFormIsOpen, setEditFormIsOpen] = useState(false)
    function toggleEditForm() {
        setEditFormIsOpen((prevState) => {
            return !prevState
        }
        )
    }
    return (
        <>
            <div>
                <h3>{song.title}</h3>
                <p>Released: {song.releaseYear}</p>
                <p>Rated: {song.rating}</p>
                {song.nowShowing && <p>Now Showing</p>}
                <button onClick={handleDelete}>DELETE {song.title}</button>
                <button onClick={toggleEditForm}>
                    {editFormIsOpen ? "Close Editor" : "Edit"}
                </button>
                {editFormIsOpen &&
                    <EditSongForm song={song} setSong={setSong} setEditFormIsOpen={setEditFormIsOpen}></EditSongForm>
                }
            </div>
        </>
    )
}