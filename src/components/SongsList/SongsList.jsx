import SongsListItem from './SongsListItem/SongsListItem'

export default function SongsList({ songs }) {
    const songsComponents = songs.map(song => <SongsListItem key={song._id} song={song}></SongsListItem>)
    return (
        <>
            {songsComponents}
        </>
    )
}