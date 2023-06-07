import { Link } from 'react-router-dom'

export default function SongsListItem({ song }) {
    return (
        <>
            <p>
                <Link to={`/songs/${song._id}`}>
                    {song.title}
                </Link>
            </p>
        </>
    )
}