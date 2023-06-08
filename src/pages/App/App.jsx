import AuthPage from '../AuthPage/AuthPage';
import NewRecipePage from '../NewRecipePage/NewRecipePage';
import RecipesIndexPage from '../RecipesIndexPage/RecipesIndexPage';
import RecipeDetailPage from '../RecipeDetailPage/RecipeDetailPage';
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
            <Route path="/recipes/new" element={<NewRecipePage />} />
            <Route path="/recipes" element={<RecipesIndexPage />} />
            <Route path="/recipes/:recipeId" element={<RecipeDetailPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser}></AuthPage>}
    </main>
  );
}