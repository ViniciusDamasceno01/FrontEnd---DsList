import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/ListGames.css';

const BASE_URL = 'https://projetospringboot02-production.up.railway.app';

export default function ListGames() {
  const { listId } = useParams();
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/lists/${listId}/games`)
      .then(response => setGames(response.data))
      .catch(error => console.error("Erro ao carregar jogos:", error));
  }, [listId]);

  return (
    <div className="games-container">
      <h2>Jogos da Lista {listId}</h2>
      <ul>
        {games.map(game => (
          <li key={game.id}>
            {game.title} - {game.year} ({game.score})
          </li>
        ))}
      </ul>
    </div>
  );
}
