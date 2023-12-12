import { LiaTimesSolid } from "react-icons/lia";
import "./Model.scss";

////////// model design part start ///////////////
const Model = ({ childern, hide }) => {
  return (
    <>
      <div className="model-container">
        <div className="model-box">
          <div className="model-heading">
            <div className="text">
              <h3>Sign Up</h3>
              <p>It's quick and easy.</p>
            </div>
            <div className="close-btn" onClick={() => hide(false)}>
              <span>
                <LiaTimesSolid />
              </span>
            </div>
          </div>
          <div className="model-body">{childern}</div>
        </div>
      </div>
    </>
  );
};

export default Model;
