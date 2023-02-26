const Match = ({ match }) => {
    return (
      <tr>
        <td>{match.matchDate}{' '}</td>
        <td>{match.player1} (<span className="badge bg-primary text-wrap">{match.p1Score} - {match.p2Score}</span>) {match.player2}{' '}</td>
        <td>{match.status}</td>
        <td>
          {
            match.status === 'ongoing'
            ? (
                <input type='button' value='Update Score' className='mt-3 btn btn-info' /> - 
                <input type='button' value='Update Status' className='mt-3 btn btn-info' />
              )
            : match.status === 'not started' 
              ? (<input type='button' value='Start Match' className='mt-3 btn btn-warning' />)
              : (<p className='mt-5 lead'>No Action</p>)
          }
        </td>
      </tr>
    )
  }
  
export default Match