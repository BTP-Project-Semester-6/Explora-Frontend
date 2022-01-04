import "./suggestion.css";
function Suggestion() {
  const url =
    "https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg";
  return (
    <div>
      <div style={{ margin: "auto" }} className="row">
        <div className="col-4">
          <img className="img-sugg" src={url} alt="#" />
        </div>
        <div style={{ margin: "auto" }} className="col-8">
          <div className="sug-name">Himanshu Rane</div>
          <div className="sug-username">himanshu_rane_</div>
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
