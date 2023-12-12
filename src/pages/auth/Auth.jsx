import { Link } from "react-router-dom";
import "./Auth.scss";
import Mata from "../../component/Mata/Mata";
import Model from "../../component/model/Model";

const Auth = () => {
  // const [model, setModel] = useState(false);
  return (
    <>
      <Mata title="Facebook - log in or sing up" />

      <Model>
        <div className="content">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
          laboriosam consequuntur ad vitae dolores amet! Repellendus doloribus,
          deserunt nesciunt dolor earum eveniet voluptatibus, perspiciatis
          aspernatur tenetur rem rerum nihil expedita!
        </div>
      </Model>

      <div className="auth">
        <div className="container">
          <div className="facebook-login">
            <div className="facebook-content">
              <img
                src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
                alt=""
              />
              <h2>
                Facebook helps you connect and share with the people in your
                life.
              </h2>
            </div>
            <div className="facebook-loginForm">
              <form action="">
                <input type="text" placeholder="Enter email or phone number" />
                <input type="text" placeholder="Enter password" />
                <button className="btn">Log in</button>
                <Link to="">Forgotten password?</Link>
                <div className="divider"></div>
                <div className="create">
                  <div className="create-btn btn">Create new account</div>
                </div>
              </form>
              <div className="short-disc">
                <Link to="">Create a Page</Link> for a celebrity, brand or
                business.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
