import { Link } from "react-router-dom";

const Presence = () => {
  return (
    <div>
      <Link to="/register/chesstin" className="go-back -mt-10">
        <p>go back</p>
      </Link>
      <h1
        className="main-title text-white "
        style={{ paddingRight: "15%", paddingLeft: "2rem" }}
      >
        do you confirm your <span className="text-red">presence</span> in
        chesstin’s 2nd edition?
      </h1>
      <div className="form mt-36">
        <div className="custom-select">
          <select name="traveling-agreement" id="traveling-agreement">
            <option value="yes">YES</option>
            <option value="no">NO</option>
          </select>
          <span className="custom-arrow"></span>
        </div>
        <Link to="/register/thank-you" className="register mt-10">
          <button>next</button>
        </Link>
      </div>

    </div>
  );
};

export default Presence;
