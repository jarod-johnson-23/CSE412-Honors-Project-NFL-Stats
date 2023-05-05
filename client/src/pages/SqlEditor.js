import "./SqlEditor.css";
import { useEffect, useState } from "react";
import Axios from "axios";

function SqlEditor() {
  const [sqlInput, set_sqlInput] = useState("");
  const [sqlResults, set_sqlResults] = useState([]);
  const [sqlColumns, set_sqlColumns] = useState([]);

  let url = "http://localhost:3010";

  const runQuery = () => {
    if (sqlInput) {
      Axios.post(url + "/custom-query", {
        sql: sqlInput,
      }).then((response) => {
        if (response.data.length > 0) {
          console.log(response.data);
          set_sqlResults(response.data);
          set_sqlColumns(Object.keys(response.data[0]));
        }
      });
    } else {
      set_sqlResults([]);
      set_sqlColumns([]);
    }
  };

  return (
    <div className="sql-page-body">
      <div className="input-section">
        <div className="inputs">
          <h2>Test SQL commands against the NPE database!</h2>
          <p>
            (DELETE, UPDATE, INSERT queries will not be run or return a result)
          </p>
          <p>
            LIMIT is not supported, queries are automatically limited to 100
            results
          </p>
          <textarea
            className="sql-input"
            value={sqlInput}
            onChange={(e) => {
              set_sqlInput(e.target.value);
            }}
          />
          <button
            className="default-btn"
            onClick={() => {
              runQuery();
            }}
          >
            Execute
          </button>
        </div>
        <div className="table-info">
          <div className="table-info-row">
            <b>Players</b>
            <p>pid : INT</p>
            <p>name : VARCHAR</p>
            <p>year : INT</p>
            <p>date : VARCHAR</p>
            <p>week : INT</p>
            <p>age : DOUBLE</p>
            <p>position: VARCHAR</p>
            <p>team : VARCHAR</p>
            <p>dest : VARCHAR</p>
            <p>opp : VARCHAR</p>
            <p>result : VARCHAR</p>
            <p>start : INT</p>
            <p>passingCompletions : INT</p>
            <p>passingAttempts : INT</p>
            <p>passingaYards : INT</p>
            <p>passingTouchdowns : INT</p>
            <p>passingInterceptions : INT</p>
            <p>passingRating : DOUBLE</p>
            <p>passingSacks : INT</p>
            <p>passingSackYards : INT</p>
            <p>passingAdjustedYardsPerAttempt : DOUBLE</p>
            <p>rushingAttempts : INT</p>
            <p>rushingYards : INT</p>
            <p>rushingTouchdowns : INT</p>
            <p>receivingTargets : INT</p>
            <p>receivingReceptions : INT</p>
            <p>receivingYards : INT</p>
            <p>receivingTouchdowns : INT</p>
            <p>fumbles : INT</p>
            <p>fumblesLost : INT</p>
            <p>offensiveSnaps : INT</p>
            <p>offensiveSnapsPercentage : INT</p>
            <p>fantasyDataPPR : DOUBLE</p>
            <p>avgPassYards : DOUBLE</p>
            <p>avgPassTd : DOUBLE</p>
            <p>avgInterceptions: DOUBLE</p>
            <p>avgRushYards : DOUBLE</p>
            <p>avgRushTd : DOUBLE</p>
            <p>avgReceptions : DOUBLE</p>
            <p>avgReceivingYards : DOUBLE</p>
            <p>avgReceivingTd : DOUBLE</p>
            <p>avgPassingAttemptsY2D : DOUBLE</p>
            <p>avgPassingCompletionsY2D : DOUBLE</p>
            <p>avgPassingYardsY2D : DOUBLE</p>
            <p>avgPassingTouchdownsY2D : DOUBLE</p>
            <p>avgPassingInterceptionsY2D : DOUBLE</p>
            <p>avgRushingAttempsY2D : DOUBLE</p>
            <p>avgRushingYardsY2D : DOUBLE</p>
            <p>avgRushingTouchdownsY2D : DOUBLE</p>
            <p>avgReceivingTargetsY2D : DOUBLE</p>
            <p>avgReceivingReceptionsY2D : DOUBLE</p>
            <p>avgReceivingYardsY2D : DOUBLE</p>
            <p>avgReceiginTouchdownsY2D : DOUBLE</p>
          </div>
          <div className="table-info-row">
            <b>Defenses</b>
            <p>did : INT</p>
            <p>year : INT</p>
            <p>fullName : VARCHAR</p>
            <p>tag : VARCHAR</p>
            <p>pointsAllowedPG : DOUBLE</p>
            <p>yardsAllowedPG : DOUBLE</p>
            <p>takeawaysPG : DOUBLE</p>
            <p>passingYardsPG : DOUBLE</p>
            <p>passingTouchdownsPG : DOUBLE</p>
            <p>interceptionsPG : DOUBLE</p>
            <p>rushingYardsPG : DOUBLE</p>
            <p>rushingTouchdownsPG : DOUBLE</p>
            <p>rbReceivingTargetsPG : DOUBLE</p>
            <p>rbReceivingYardsPG : DOUBLE</p>
            <p>rbReceivingTouchdownsPG : DOUBLE</p>
            <p>wrReceivingTargetsPG : DOUBLE</p>
            <p>wrReceivingYardsPG : DOUBLE</p>
            <p>wrReceivingTouchdownsPG : DOUBLE</p>
            <p>teReceivingTargetsPG : DOUBLE</p>
            <p>teReceivingYardsPG : DOUBLE</p>
            <p>teReceivingTouchdownsPG : DOUBLE</p>
          </div>
        </div>
      </div>
      <div className="result-section">
        <table>
          <thead>
            <tr>
              {sqlColumns.map((val, key) => {
                return <th key={val}>{val}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {sqlResults.map((val, key) => {
              return (
                <tr key={key}>
                  {sqlColumns.map((val2, key) => {
                    return <td key={key}>{val[val2]}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SqlEditor;
