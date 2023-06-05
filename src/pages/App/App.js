import AuthPage from '../AuthPage/AuthPage';
import NewSongPage from '../NewSongPage/NewSongPage';
import SongsIndexPage from '../SongsIndexPage/SongsIndexPage';
import SongDetailPage from '../SongDetailPage/SongDetailPage';
import HomePage from '../HomePage/HomePage';
import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users-service';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {user ?
        <>
          <NavBar setUser={setUser} user={user}></NavBar>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/songs/new" element={<NewSongPage />} />
            <Route path="/songs" element={<SongsIndexPage />} />
            <Route path="/songs/:songId" element={<SongDetailPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser}></AuthPage>}
    </main>
  );
}
