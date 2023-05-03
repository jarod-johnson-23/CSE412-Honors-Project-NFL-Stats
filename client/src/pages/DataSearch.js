import "./DataSearch.css";
import { useState, useEffect } from "react";
import Axios from "axios";

function DataSearch() {
  const [passLeaderCareer, set_passLeaderCareer] = useState([]);
  const [rushLeaderCareer, set_rushLeaderCareer] = useState([]);
  const [recLeaderCareer, set_recLeaderCareer] = useState([]);
  const [fantasyLeader, set_fantasyLeader] = useState([]);
  const [passTDLeaderCareer, set_passTDLeaderCareer] = useState([]);
  const [rushTDLeaderCareer, set_rushTDLeaderCareer] = useState([]);
  const [recTDLeaderCareer, set_recTDLeaderCareer] = useState([]);
  const [passRatingCareer, set_passRatingCareer] = useState([]);
  const [fumblesCareer, set_fumblesCareer] = useState([]);
  const [defLeastPPG, set_defLeastPPG] = useState([]);
  const [defMostPPG, set_defMostPPG] = useState([]);

  const url = "http://localhost:3010";

  useEffect(() => {
    Axios.get(url + "/get-top-passing-yards").then((response) => {
      set_passLeaderCareer(response.data);
    });
    Axios.get(url + "/get-top-rushing-yards").then((response) => {
      set_rushLeaderCareer(response.data);
    });
    Axios.get(url + "/get-top-receiving-yards").then((response) => {
      set_recLeaderCareer(response.data);
    });
    Axios.get(url + "/get-top-fantasy-performance").then((response) => {
      set_fantasyLeader(response.data);
    });
    Axios.get(url + "/get-top-passing-touchdowns").then((response) => {
      set_passTDLeaderCareer(response.data);
    });
    Axios.get(url + "/get-top-rushing-touchdowns").then((response) => {
      set_rushTDLeaderCareer(response.data);
    });
    Axios.get(url + "/get-top-receiving-touchdowns").then((response) => {
      set_recTDLeaderCareer(response.data);
    });
    Axios.get(url + "/get-top-passer-rating-all-time").then((response) => {
      set_passRatingCareer(response.data);
    });
    Axios.get(url + "/get-top-fumbles-lost").then((response) => {
      set_fumblesCareer(response.data);
    });
    Axios.get(url + "/def-least-PPG").then((response) => {
      set_defLeastPPG(response.data);
    });
    Axios.get(url + "/def-most-PPG").then((response) => {
      set_defMostPPG(response.data);
    });
  }, []);

  return (
    <div className="data-body">
      <div className="leaders-section">
        <div className="leader-card">
          <h3>Passing Leaders - Career</h3>
          <div className="horizontal-line" />
          <div className="card-results">
            <table>
              <tbody>
                <tr>
                  <td>
                    <b>Name</b>
                  </td>
                  <td>
                    <b>Games Played</b>
                  </td>
                  <td>
                    <b>Passing Yards</b>
                  </td>
                </tr>
                {passLeaderCareer.map((val, key) => {
                  return (
                    <tr key={key}>
                      <td>{val.name}</td>
                      <td>{val.games}</td>
                      <td>{val.sumPassingYards}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="leader-card">
          <h3>Rushing Leaders - Career</h3>
          <div className="horizontal-line" />
          <div className="card-results">
            <table>
              <tbody>
                <tr>
                  <td>
                    <b>Name</b>
                  </td>
                  <td>
                    <b>Games Played</b>
                  </td>
                  <td>
                    <b>Rushing Yards</b>
                  </td>
                </tr>
                {rushLeaderCareer.map((val, key) => {
                  return (
                    <tr key={key}>
                      <td>{val.name}</td>
                      <td>{val.games}</td>
                      <td>{val.sumRushingYards}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="leader-card">
          <h3>Receiving Leaders - Career</h3>
          <div className="horizontal-line" />
          <div className="card-results">
            <table>
              <tbody>
                <tr>
                  <td>
                    <b>Name</b>
                  </td>
                  <td>
                    <b>Games Played</b>
                  </td>
                  <td>
                    <b>Receiving Yards</b>
                  </td>
                </tr>
                {recLeaderCareer.map((val, key) => {
                  return (
                    <tr key={key}>
                      <td>{val.name}</td>
                      <td>{val.games}</td>
                      <td>{val.sumReceivingYards}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="leader-card">
          <h3>Top Fantasy Performance - Game</h3>
          <div className="horizontal-line" />
          <div className="card-results">
            <table>
              <tbody>
                <tr>
                  <td>
                    <b>Name</b>
                  </td>
                  <td>
                    <b>Date</b>
                  </td>
                  <td>
                    <b>Points (PPR)</b>
                  </td>
                </tr>
                {fantasyLeader.map((val, key) => {
                  return (
                    <tr key={key}>
                      <td>{val.name}</td>
                      <td>{val.date}</td>
                      <td>{val.fantasyDataPPR}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="leader-card">
          <h3>Passing TD Leaders - Career</h3>
          <div className="horizontal-line" />
          <div className="card-results">
            <table>
              <tbody>
                <tr>
                  <td>
                    <b>Name</b>
                  </td>
                  <td>
                    <b>Games Played</b>
                  </td>
                  <td>
                    <b>Passing TDs</b>
                  </td>
                </tr>
                {passTDLeaderCareer.map((val, key) => {
                  return (
                    <tr key={key}>
                      <td>{val.name}</td>
                      <td>{val.games}</td>
                      <td>{val.sumPassingTouchdowns}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="leader-card">
          <h3>Rushing TD Leaders - Career</h3>
          <div className="horizontal-line" />
          <div className="card-results">
            <table>
              <tbody>
                <tr>
                  <td>
                    <b>Name</b>
                  </td>
                  <td>
                    <b>Games Played</b>
                  </td>
                  <td>
                    <b>Rushing TDs</b>
                  </td>
                </tr>
                {rushTDLeaderCareer.map((val, key) => {
                  return (
                    <tr key={key}>
                      <td>{val.name}</td>
                      <td>{val.games}</td>
                      <td>{val.sumRushingTouchdowns}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="leader-card">
          <h3>Receiving TD Leaders- Career</h3>
          <div className="horizontal-line" />
          <div className="card-results">
            <table>
              <tbody>
                <tr>
                  <td>
                    <b>Name</b>
                  </td>
                  <td>
                    <b>Games Played</b>
                  </td>
                  <td>
                    <b>Receiving TDs</b>
                  </td>
                </tr>
                {recTDLeaderCareer.map((val, key) => {
                  return (
                    <tr key={key}>
                      <td>{val.name}</td>
                      <td>{val.games}</td>
                      <td>{val.sumReceivingTouchdowns}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="leader-card">
          <h3>Passing Rating Leaders - Career</h3>
          <div className="horizontal-line" />
          <div className="card-results">
            <table>
              <tbody>
                <tr>
                  <td>
                    <b>Name</b>
                  </td>
                  <td>
                    <b>Games Started</b>
                  </td>
                  <td>
                    <b>AVG Passer Rating</b>
                  </td>
                </tr>
                {passRatingCareer.map((val, key) => {
                  return (
                    <tr key={key}>
                      <td>{val.name}</td>
                      <td>{val.starts}</td>
                      <td>{val.avgPassingRating}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="leader-card">
          <h3>Fumbles Lost Leaders - Career</h3>
          <div className="horizontal-line" />
          <div className="card-results">
            <table>
              <tbody>
                <tr>
                  <td>
                    <b>Name</b>
                  </td>
                  <td>
                    <b>Games Played</b>
                  </td>
                  <td>
                    <b>Fumbles Lost</b>
                  </td>
                </tr>
                {fumblesCareer.map((val, key) => {
                  return (
                    <tr key={key}>
                      <td>{val.name}</td>
                      <td>{val.games}</td>
                      <td>{val.sumFumbles}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="leader-card">
          <h3>Least PPG allowed by Defense - Season</h3>
          <div className="horizontal-line" />
          <div className="card-results">
            <table>
              <tbody>
                <tr>
                  <td>
                    <b>Team</b>
                  </td>
                  <td>
                    <b>Year</b>
                  </td>
                  <td>
                    <b>Points Per Game Allowed</b>
                  </td>
                </tr>
                {defLeastPPG.map((val, key) => {
                  return (
                    <tr key={key}>
                      <td>{val.fullName}</td>
                      <td>{val.year}</td>
                      <td>{val.pointsAllowedPG}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="leader-card">
          <h3>Most PPG allowed by Defense - Season</h3>
          <div className="horizontal-line" />
          <div className="card-results">
            <table>
              <tbody>
                <tr>
                  <td>
                    <b>Team</b>
                  </td>
                  <td>
                    <b>Year</b>
                  </td>
                  <td>
                    <b>Points Per Game Allowed</b>
                  </td>
                </tr>
                {defMostPPG.map((val, key) => {
                  return (
                    <tr key={key}>
                      <td>{val.fullName}</td>
                      <td>{val.year}</td>
                      <td>{val.pointsAllowedPG}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default DataSearch;
