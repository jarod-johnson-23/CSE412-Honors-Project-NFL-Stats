import "./DataSearch.css";
import { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function DataSearch() {
  const [results, set_results] = useState([]);
  const [input, set_input] = useState("");

  const navigate = useNavigate();

  let name = useParams();

  const url = "http://localhost:3010";

  useEffect(() => {
    set_input(name.name);
    if (name.name !== "empty") {
      Axios.post(url + "/get-player-data", {
        name: name.name,
      }).then((response) => {
        set_results(response.data);
        console.log(response);
      });
    }
  }, []);

  const getPlayer = () => {
    if (input) {
      navigate("/data-search/" + input);
      window.location.reload(false);
    }
  };

  return (
    <div className="data-body">
      <div className="search-div">
        <h2>Search by name: </h2>
        <input
          type="text"
          className="search-box"
          value={input}
          onChange={(e) => {
            set_input(e.target.value);
          }}
        />
      </div>
      <button
        className="default-btn"
        onClick={() => {
          getPlayer();
        }}
      >
        Search
      </button>
      <div className="results-body">
        <table>
          <tr>
            <th colspan="8">Info</th>
            <th colspan="9">Passing</th>
            <th colspan="3">Rushing</th>
            <th colspan="4">Receiving</th>
            <th colspan="5">Miscellaneous</th>
          </tr>
          <tr>
            <th>Year</th>
            <th>Week</th>
            <th>Name</th>
            <th>Age</th>
            <th>Team</th>
            <th>Opponent</th>
            <th>Result</th>
            <th>Started</th>
            <th>Completions</th>
            <th>Attempts</th>
            <th>Yards</th>
            <th>Touchdowns</th>
            <th>Interceptions</th>
            <th>Rating</th>
            <th>Sacks</th>
            <th>Sack Yards</th>
            <th>Yards/Attempt</th>
            <th>Attempts</th>
            <th>Yards</th>
            <th>Touchdowns</th>
            <th>Targets</th>
            <th>Receptions</th>
            <th>Yards</th>
            <th>Touchdowns</th>
            <th>Fumbles</th>
            <th>Fumbles Lost</th>
            <th>Off. Snaps</th>
            <th>Off. Snaps %</th>
            <th>Fantasy PPR</th>
          </tr>
          {results.map((val, key) => {
            return (
              <tr>
                <td>{val.year}</td>
                <td>{val.week}</td>
                <td>{val.name}</td>
                <td>{val.age}</td>
                <td>{val.team}</td>
                <td>{val.opp}</td>
                <td>{val.result}</td>
                <td>{val.start}</td>
                <td>{val.passingCompletions}</td>
                <td>{val.passingAttempts}</td>
                <td>{val.passingYards}</td>
                <td>{val.passingTouchdowns}</td>
                <td>{val.passingInterceptions}</td>
                <td>{val.passingRating}</td>
                <td>{val.passingSacks}</td>
                <td>{val.passingSackYards}</td>
                <td>{val.passingAdjustedYardsPerAttempt}</td>
                <td>{val.rushingAttempts}</td>
                <td>{val.rushingYards}</td>
                <td>{val.rushingTouchdowns}</td>
                <td>{val.receivingTargets}</td>
                <td>{val.receivingReceptions}</td>
                <td>{val.receivingYards}</td>
                <td>{val.receivingTouchdowns}</td>
                <td>{val.fumbles}</td>
                <td>{val.fumblesLost}</td>
                <td>{val.offensiveSnaps}</td>
                <td>{val.offensiveSnapsPercentage}</td>
                <td>{val.fantasyDataPPR}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default DataSearch;
