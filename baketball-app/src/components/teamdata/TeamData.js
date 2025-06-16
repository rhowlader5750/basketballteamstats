import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./index.scss";


const TeamData = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [playerData, setPlayerData] = useState([]);
  const [playersToShow, setPlayersToShow] = useState(10);
  const [teamValue, setTeamValue] = useState("");
  const [positionValue, setPositionValue] = useState("");

  const teamNames = {
    "LAL": "Los Angeles Lakers",
    "BOS": "Boston Celtics",
    "GSW": "Golden State Warriors",
    "CHI": "Chicago Bulls",
    "MIA": "Miami Heat",
    "NYK": "New York Knicks",
    "MIL": "Milwaukee Bucks",
    "MIN":"Minnesota Timberwolves",
    "WAS":"Washington Wizards",
    "TOR":"Toronto Raptors",
    "BRK":"Brooklyn Nets",
    "PHI":"Philadelphia 76ers",
    "OKC":"Oklahoma City Thunder",
    "DEN":"Denver Nuggets",
    "POR":"Portland Trail Blazers",
    "UTA":"Utah Jazz",
    "CLE":"Cleveland Cavaliers",
    "IND":"Indiana Pacers",
    "DET":"Detroit Pistons",
    "LAC":"Los Angeles Clippers",
    "SAC":"Sacramento Kings",
    "PHO":"Phoenix Suns",
    "ORL":"Orlando Magic",
    "ATL":"Atlanta Hawks",
    "CHO":"Charlotte Hornets",
    "HOU":"Houston Rockets",
    "MEM":"Memphis Grizzlies",
    "DAL":"Dallas Mavericks",
    "SAS":"San Antonio Spurs",
    "NOP":"New Orleans Pelicans"
    
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const teamValue = params.get('teams');
    const positionValue = params.get('positions');
    const nameValue = params.get('name');


    setTeamValue(teamValue);
    setPositionValue(positionValue);

    if (teamValue) {
      axios.get(`http://localhost:8080/api/v1/players?team=${encodeURIComponent(teamValue)}`)
        .then(response => {
          console.log(response.data); // Check the structure of your response
          setPlayerData(response.data); // Adjust according to the actual response structure
          setLoading(false);
        })
        .catch(error => {
          setError(error);
          setLoading(false);
        });
    } else if (positionValue) {
      axios.get(`http://localhost:8080/api/v1/players?position=${encodeURIComponent(positionValue)}`)
        .then(response => {
            console.log(response.data);
            setPlayerData(response.data);
            setLoading(false);
        })
        .catch(error => {
          setError(error);
          setLoading(false);
        });
    } else if (nameValue) {
      axios.get(`http://localhost:8080/api/v1/players?name=${encodeURIComponent(nameValue)}`)
        .then(response => {
          setPlayerData(response.data);
          setLoading(false);
        })
        .catch(error => {
          setError(error);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const fullTeamName = teamValue ? teamNames[teamValue] : null;
  const headerText = teamValue ? `${fullTeamName} Player Data` : (positionValue ? `${positionValue} Player Data` : "Player Data");

  console.log("Player Data to Display:", playerData);
  return (
    
    <div className={`fade-in ${loading ? 'loading' : ''}`}>
      <div className="table-container" >
        <div style={{ overflowX: 'auto' }}>

        
      <h1 className="page-title">
            {headerText}
        </h1>
        <table>
          <thead>
             <tr>
    <th>Name</th>
    <th>Team</th>
    <th>Rank</th>
    <th>Pos</th>
    <th>Age</th>
    <th>GP</th>
    <th>GS</th>
    <th>MIN</th>
    <th>FG</th>
    <th>FGA</th>
    <th>FG%</th>
    <th>3P</th>
    <th>3PA</th>
    <th>3P%</th>
    <th>2P</th>
    <th>2PA</th>
    <th>2P%</th>
    <th>eFG%</th>
    <th>FT</th>
    <th>FTA</th>
    <th>FT%</th>
    <th>OREB</th>
    <th>DREB</th>
    <th>REB</th>
    <th>AST</th>
    <th>STL</th>
    <th>BLK</th>
    <th>TO</th>
    <th>PF</th>
    <th>PTS</th>
    <th>Awards</th>
  </tr>
          </thead>
          <tbody>
            {playerData.slice(0, playersToShow).map(player => (
              <tr key={player.name}>
                <td>{player.name}</td>
                <td>{player.team}</td>
                <td>{player.rk}</td>
                <td>{player.position}</td>
                <td>{player.age}</td>
                <td>{player.games_played}</td>
                <td>{player.games_started}</td>
                <td>{player.minutes_played}</td>
                <td>{player.field_goal}</td>
                <td>{player.field_goal_attempts}</td>
                <td>{player.field_goal_percent}</td>
                <td>{player.three_point_goal}</td>
                <td>{player.three_point_attempt}</td>
                <td>{player.three_point_percent}</td>
                <td>{player.two_point_goal}</td>
                <td>{player.two_point_attempt}</td>
                <td>{player.two_point_percent}</td>
                <td>{player.effective_goal_percent}</td>
                <td>{player.free_throw}</td>
                <td>{player.free_throw_attempt}</td>
                <td>{player.free_throw_percent}</td>
                <td>{player.offensive_rebound}</td>
                <td>{player.defensive_rebound}</td>
                <td>{player.total_rebound}</td>
                <td>{player.assists}</td>
                <td>{player.steals}</td>
                <td>{player.blocks}</td>
                <td>{player.turnovers}</td>
                <td>{player.personal_fouls}</td>
                <td>{player.points}</td>
                <td>{player.awards}</td>
              
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        {playersToShow < playerData.length && (
          <button onClick={() => setPlayersToShow(playersToShow + 10)} style={{ marginTop: '10px', marginBottom: '10px' }} className={`show-more-button ${loading ? 'loading' : ''}`}>
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default TeamData;
