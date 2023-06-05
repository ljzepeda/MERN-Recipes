import { useNavigate, useParams } from "react-router-dom";
import { getSongRequest, deleteSongRequest } from "../../utilities/songs-api";
import { useEffect, useState } from 'react';
import SongDetail from "../../components/SongDetail/SongDetail";
export default function SongDetailPage() {
    let { songId } = useParams();
    const [song, setSong] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    useEffect(() => {
        async function getSong() {
            const song = await getSongRequest(songId);
            if (song) {
                setSong(song)
                setTimeout(() => {
                    setLoading(false)
                }, 1000)
            } else {
                setError('No Song Found')
                setLoading(false)
            }
        }
        getSong()
    }, [])

    async function handleDelete(e) {
        const deleteResponse = await deleteSongRequest(song._id);
        if (deleteResponse.data === 'success') {
            navigate('/songs')
        }
    }
    return (
        <>
            <h1>Here's a song</h1>
            {loading ? <p>Loading....</p>
                :
                error ? <p>{error}</p>
                    :
                    <SongDetail song={song} handleDelete={handleDelete} setSong={setSong}></SongDetail>
            }
        </>
    )
}