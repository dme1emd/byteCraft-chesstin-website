import TimeLeft from "../TimeLeft/TimeLeft";


const MainRegisterPage = () => {
  return (
    <div>
      <h1 className="main-title text-white p-8">
        Don’t be late for <span className="text-red">chesstin</span>
      </h1>
      <TimeLeft
        buttonText={"next"}
        margin={"mt-16"}
        linkTo={"/register/info"}
      ></TimeLeft>
    </div>
  );
};

export default MainRegisterPage;
