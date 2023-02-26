import Match from './Match'
import Standing from './Standing'

const Matchups = ({ matches, teams }) => {
  return (
    <div className='row align-items-start mt-5'>
      <ul class="nav nav-pills nav-fill" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Matches</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Standing</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false" disabled>Disabled</button>
        </li>
      </ul>
      <div class="tab-content" id="pills-tabContent">
        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
          <table className='table table-striped table-bordered col-6 mt-3'>
            <tr>
              <th>Date / Time</th>
              <th>Fixture</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
            { matches.length > 0 ? matches.map((match, index) => (<Match key={index} match={match} />)) : (<tr rowspan='3'>No Matches</tr>) }
          </table>
        </div>
        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
          <table className='table table-striped table-bordered col-6 mt-3'>
            <tr>
              <th>Team name</th>
              <th>Points</th>
            </tr>
            { teams.length > 0 ? teams.map((stand, index) => (<Standing key={index} team={stand} />)) : (<tr rowspan='3'>No Teams</tr>) }
          </table>
        </div>
        <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">...</div>
        <div class="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab" tabindex="0">...</div>
      </div>
    </div> 
  )
}

export default Matchups