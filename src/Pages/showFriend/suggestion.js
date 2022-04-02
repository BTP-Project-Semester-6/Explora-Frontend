import "./suggestion.css";
function Suggestion(props) {
  return (
    <div>
      <div style={{ margin: "auto" }} className="row">
        <div className="col-4">
          <img className="img-sugg" src={props.pic} alt="#" />
        </div>
        <div style={{ margin: "auto" }} className="col-8">
          <div className="sug-name">{props.name}</div>
          <div className="sug-username">{props.username}</div>
          <div className="sug-similarity">
            Similarity: {props.similarity.toFixed(2)}%
          </div>
        </div>
      </div>
      {/* <div className="container">
        <table>
          <tr>
            <th style={{ width: "20%" }}>
              
            </th>
            <th style={{ width: "80%" }}>
              
            </th>
          </tr>
        </table>
      </div> */}
    </div>
  );
}
export default Suggestion;
