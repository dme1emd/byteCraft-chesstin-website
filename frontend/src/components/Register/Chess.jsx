import { Link } from "react-router-dom";

const Chess = () => {
  return (
    <div>
      <Link to="/register/competition" className="go-back -mt-10">
        <p>go back</p>
      </Link>
      <h1
        className="main-title text-white"
        style={{ paddingRight: "30%", paddingLeft: "2rem" }}
      >
        let’s talk <span className="text-red">chess</span>
      </h1>
      <div className="form mt-16">
        <input
          type="number"
          name="chess-rating"
          id="chess-rating"
          placeholder="What is your chess rating ?"
          className="text-input "
        />
        <input
          type="text"
          name="past-experience"
          id="past-experience"
          placeholder="Any past experiences with chess?"
          className="text-input mb-22 mt-14"
        />
        <h2 className="note text-white mb-5">
          <span className="text-red">NB</span>: Don’t forget to mention any rewards or certtificates that you have received
        </h2>
        <Link to="/register/chesstin" className="register mt-24">
          <button>next</button>
        </Link>
      </div>
    </div>
  );
};

export default Chess;
