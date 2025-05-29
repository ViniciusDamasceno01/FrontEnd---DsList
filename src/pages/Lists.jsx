import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/Lists.css';

const BASE_URL = 'https://projetospringboot02-production.up.railway.app';

export default function Lists() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/lists`)
      .then(response => setLists(response.data))
      .catch(error => console.error("Erro ao carregar listas:", error));
  }, []);

  return (
    <div className="lists-container">
      <h2>Listas de Jogos</h2>
      <ul>
        {lists.map(list => (
          <li key={list.id}>
            <Link to={`/lists/${list.id}/games`}>{list.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
