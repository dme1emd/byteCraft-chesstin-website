import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <Link to="/register/info" className="go-back -mt-10">
        <p>go back</p>
      </Link>
      <h1
        className="main-title text-white"
        style={{ paddingRight: "40%", paddingLeft: "2rem" }}
      >
        we need your <span className="text-red">contact</span>
      </h1>
      <div className="form">
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          className="text-input"
        />
        <input
          type="text"
          name="phone-number"
          id="phone-number"
          placeholder="Phone number"
          className="text-input mb-28"
        />
        <h2 className="note text-white mb-5">
          <span className="text-red">NB</span>: Please make sure the information
          you are providing is correct
        </h2>
        <Link to="/register/competition" className="register mt-24">
          <button>next</button>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
