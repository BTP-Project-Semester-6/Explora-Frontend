export default function Admin() {
  return (
    <div
      style={{
        height: "100vh",
        margin: "0px",
        "background-image": "linear-gradient(135deg, #8bc6ec 0%, #9599e2 100%)",
      }}
    >
      <div style={{ marginTop: "0px" }} className="container">
        <div
          style={{
            width: "50%",
            margin: "auto",
            background: "white",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            marginTop: "10%",
          }}
          className="container"
        >
          <div style={{ textAlign: "center" }}>
            <h1 style={{ "font-weight": "800" }}>Admin Login</h1>
          </div>
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <button type="submit" class="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
