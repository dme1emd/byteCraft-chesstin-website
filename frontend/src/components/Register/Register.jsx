import MainRegisterPage from "./MainRegisterPage";
import Info from "./Info";
import Contact from "./Contact";
import Competition from "./Competition";
import Chess from './Chess'
import "./Register.css";
import Chesstin from "./Chesstin";
import Presence from "./Presence";
import ThankYou from "./ThankYou";

const Register = ({ phase }) => {
  return (
    <>
      {phase === "main" ? (
        <MainRegisterPage />
      ) : phase === "info" ? (
        <Info />
      ) : phase === "contact" ? (
        <Contact />
      ) : phase === "competition" ? (
        <Competition/>
      ) : phase === "chess" ? (
        <Chess/>
      ) : phase === "chesstin" ? (
        <Chesstin/>
      ) : phase === "presence" ? (
        <Presence/>
      ) : phase === "thank-you" ? (
        <ThankYou/>
      ) :(
        <h1 className="text-white">hi</h1>
      )}
    </>
  );
};

export default Register;
