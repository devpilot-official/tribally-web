import { useState, useEffect } from 'react'
// import AddCard from "./components/AddCard";
import Matchups from './components/Matchups';
import './index.css';

function App() {
  const [matcheups, setMatchups] = useState([])
  const [stadings, setStandings] = useState([])

  useEffect(() => {
    const getMatchups = async () => {
      const matchupsFromServer = await fetchMatchups()
      setMatchups(matchupsFromServer.data.games)
    }

    getMatchups()
  }, [])

  useEffect(() => {
    const getTeamsStanding = async () => {
      const teamsFromServer = await fetchTeamsStanding()
      setStandings(teamsFromServer.data.teams)
    }

    getTeamsStanding()
  }, [])

  // Fetch Matches
  const fetchMatchups = async () => {
    const res = await fetch('http://localhost:9010/matchup')
    const data = await res.json()
    return data
  }

  // Fetch Stadings
  const fetchTeamsStanding = async () => {
    const res = await fetch('http://localhost:9010/team')
    const data = await res.json()
    console.log(data)
    return data
  }

  // Add Card
  // const addCard = async (matchup) => {
  //   const res = await fetch('http://localhost:9000/matchup/new', {
  //     method: 'POST',
  //     headers: { 'Content-type': 'application/json' },
  //     body: JSON.stringify(matchup),
  //   })

    // const data = await res.json()

  //   setMatchups([...matcheups, { ...matchup }])
  // }

  return (
    <div className="container">
      {/* <AddCard onAdd={addCard} /> */}
      { matcheups.length > 0 ? (<Matchups matches={matcheups} teams={stadings} />) : (<p className='mt-5 lead'>No Matches</p>) }
    </div>
  );
}

export default App;
