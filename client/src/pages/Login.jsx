import Wrapper from "../assets/wrappers/Login";
import { FormRow, Logo } from "../components";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Wrapper>
      <form className="form">
        <div className="logo">
          <Logo />
        </div>

        <h4>Login</h4>
        <FormRow type="text" name="name" defaultValue="vimal" />
        <FormRow type="password" name="password" defaultValue="secret@123" />
        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <p>
          Not a member yet?
          <Link to="/register" className="member-btn">
            Register
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};
export default Login;
