import React, { useEffect, useState } from 'react';

const BASE_URL_BACKEND = 'https://projetospringboot02-production.up.railway.app';

function GamesList() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${BASE_URL_BACKEND}/games`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setGames(data);
        setError(null);
      })
      .catch(err => {
        setError(err.message || "Erro desconhecido ao buscar dados.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="App">Carregando jogos...</div>;
  }

  if (error) {
    return <div className="App" style={{ color: 'red' }}>Erro: {error}</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>DsList - Sua Coleção de Jogos</h1>
        <h2>Jogos Carregados:</h2>
        {games.length > 0 ? (
          <ul>
            {games.map(game => (
              <li key={game.id}>{game.title} - {game.year} ({game.score})</li>
            ))}
          </ul>
        ) : (
          <p>Nenhum jogo encontrado. Verifique seu banco de dados ou endpoints.</p>
        )}
      </header>
    </div>
  );
}

export default GamesList;