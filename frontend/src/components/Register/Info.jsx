import { Link } from "react-router-dom";

const Info = () => {
  return (
    <div>
      <Link to='/register' className='go-back -mt-10'>
        <p>go back</p>
      </Link>
      <h1 className="main-title text-white p-8 -mt-8">
        let’s gather your <span className="text-red">information</span>
      </h1>
      <div className="form">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="What’s your name ?"
          className="text-input"
        />
        <input
          type="text"
          name="field-of-studies"
          id="field-of-studies"
          placeholder="What is your field of studies ?"
          className="text-input"
        />
        <p className="text">From which university/instituion are you ?</p>
        <div className="custom-select">
          <select name="institution" id="institution">
            <option value="Estin">Estin</option>
            <option value="Estin">Bejaia</option>
            <option value="Estin">Esi Alger</option>
            <option value="Estin">Estin</option>
            <option value="Estin">Estin</option>
            <option value="Estin">Estin</option>
          </select>
          <span className="custom-arrow"></span>
        </div>
        <h2 className="note text-white">
          <span className="text-red">NB</span>: Please make sure the information you are providing is correct
        </h2>
        <Link to='/register/contact' className="register mt-20">
          <button>next</button>
        </Link>
      </div>
    </div>
  );
};

export default Info;
