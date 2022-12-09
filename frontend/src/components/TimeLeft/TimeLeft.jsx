import { Link } from "react-router-dom";
import "./TimeLeft.css";

const TimeLeft = ({ buttonText, margin, linkTo }) => {
  return (
    <>
      <div className={`time-left-container ${margin}`}>
        <div className="days-left-container">
          <div className="bg-white days-left">
            <p className="days-left-text">
              <span className="number-text">02</span> DAYS
            </p>
          </div>
        </div>
        <div className="hms-container">
          <div className="hours-left-container">
            <div className="bg-white hours-left">
              <p className="hours-left-text">
                <span className="hours-left-number-text">13</span> Hours
              </p>
            </div>
          </div>
          <div className="minutes-left-container">
            <div className="bg-white minutes-left">
              <p className="minutes-left-text">
                <span className="minutes-left-number-text">56</span> Minutes
              </p>
            </div>
          </div>
          <div className="seconds-left-container">
            <div className=" seconds-left">
              <p className="seconds-left-text">
                <span className="seconds-left-number-text">29</span> Seconds
              </p>
            </div>
          </div>
        </div>
      </div>
      <Link to={linkTo} className="register">
        <button>{buttonText}</button>
      </Link>
    </>
  );
};

export default TimeLeft;
