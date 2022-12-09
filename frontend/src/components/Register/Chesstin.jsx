import { Link } from "react-router-dom";

const Chesstin = () => {
    return ( 
        <div>
        <Link to="/register/chess" className="go-back -mt-10">
          <p>go back</p>
        </Link>
        <h1
          className="main-title text-white"
          style={{ paddingRight: "10%", paddingLeft: "2rem",marginTop:'3vh' }}
        >
          now let’s talk <span className="text-red">chesstin </span>
        </h1>
        <div className="form mt-28">
          <input
            type="text"
            name="motivation"
            id="motivation"
            placeholder="Why do you want to participate in chesstin?"
            className="text-input mb-36"
          />
          <h2 className="note text-white mb-5">
            <span className="text-red">NB</span>: motivation is an important factor in the selection criteria
          </h2>
          <Link to="/register/presence" className="register mt-24">
            <button>next</button>
          </Link>
        </div>
      </div>
     );
}
 
export default Chesstin;