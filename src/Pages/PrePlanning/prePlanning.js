import React from "react";
import "./prePlanning.scss";
export default function prePlanning() {
  const dispatch = useDispatch();

  const [city, setCity] = useState("");
  const prePlannings = [];

  const SubmitHandler = (e) => {
    e.preventDefault();
    if (city === "") {
      alert("Please enter city!");
    } else {
      dispatch(getCityChallenge(city));
    }
  };
  return (
    <div
      style={{
        width: "100%",
        height: "80vh",
        margin: "0",
        padding: "0",
      }}
    >
      <div
        style={{
          width: "100%",
          minHeight: "100px",
          margin: "0",
          padding: "auto",
          display: "flex",
        }}
      >
        <Paper
          component="form"
          onSubmit={SubmitHandler}
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
            height: 50,
          }}
          style={{
            margin: "auto",
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="City"
            inputProps={{ "aria-label": "search google maps" }}
            style={{ textTransform: "lowercase" }}
            onChange={(e) => setCity(e.target.value)}
          />
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
        <Button variant="contained">ADD PRE-PLANNING</Button>
      </div>

      <div
        className="buddy-scroll"
        style={{
          width: "75%",
          padding: "0",
          display: "vertical",
          margin: "auto",
          marginTop: "0",
          padding: "auto",
          overflowY: "auto",
          overflowX: "hidden",
          height: "90vh",
        }}
      >
        <div className="twelve">
          <h1>PRE-PLANNING</h1>
        </div>
        {prePlannings.map((prePlanningItem) => (
          <div className="horizontal-card">
            <div
              style={{
                width: "150px",
                height: "100%",
                padding: "auto",
                marginTop: "30px",
              }}
            >
              <img src={prePlanningItem.badge} alt="" />
            </div>
            <div className="horizontal-card-body" style={{ width: "100%" }}>
              <div className="orders" style={{ width: "100%" }}>
                <div>
                  <p className="name" style={{ float: "left" }}>
                    {prePlanningItem.name}
                  </p>
                </div>
                <div style={{ float: "right" }}>⌚{prePlanningItem.date}</div>
              </div>
              <div>
                <p className="order">{prePlanningItem.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
