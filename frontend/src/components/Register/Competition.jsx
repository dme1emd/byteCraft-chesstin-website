import { Link } from "react-router-dom";

const Competition = () => {
  return (
    <div>
      <Link to="/register/contact" className="go-back -mt-10">
        <p>go back</p>
      </Link>
      <h1 className="main-title text-white p-8 -mt-8">
      let the game <span className="text-red">begin</span>
      </h1>
      <div className="form mt-10">
        <p className="text">
          Where do you want to compete in the first phase ?
        </p>
        <div className="custom-select">
          <select name="competition-location" id="competition-location">
            <option value="Estin">Estin</option>
            <option value="Estin">Esi Alger</option>
          </select>
          <span className="custom-arrow"></span>
        </div>
        <h2 className="note text-white">
          Please <span className="text-red">note</span> that
          <p className="text mt-5 mb-10">
            If you get qualified for the finals you will have to travel to ESTIN
            Bejaia and compete, do you agree?
          </p>
        </h2>
        <div className="custom-select">
          <select name="traveling-agreement" id="traveling-agreement">
            <option value="Estin">YES</option>
            <option value="Estin">NO</option>
          </select>
          <span className="custom-arrow"></span>
        </div>
        <Link to="/register/chess" className="register mt-10">
          <button>next</button>
        </Link>
      </div>

    </div>
  );
};

export default Competition;
