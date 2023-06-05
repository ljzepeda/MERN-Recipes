import { songsIndexRequest } from '../../utilities/songs-api';
import { useEffect, useState } from 'react'
import SongsList from '../../components/SongsList/SongsList';

export default function SongsIndexPage() {
    const [songs, setSongs] = useState([])
    useEffect(() => {
        console.log('loading...')
        async function getSongs() {
            const songs = await songsIndexRequest();
            setSongs(songs)
        }
        getSongs();
    }, [])
    return (
        <>
            <h1>Here are your favorite and upcoming songs</h1>
            <SongsList songs={songs}></SongsList>
        </>
    )
}