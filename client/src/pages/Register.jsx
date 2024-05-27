import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/Register";
import { FormRow, Logo } from "../components/index";
const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <div className="logo">
          <Logo />
        </div>
        <h4>Register</h4>
        <FormRow type="text" name="name" defaultValue="vimal" />
        <FormRow
          type="text"
          name="lastName"
          labelText="last name"
          defaultValue="biyyapu"
        />
        <FormRow type="text" name="location" defaultValue="earth" />
        <FormRow type="email" name="email" defaultValue="vimal@gmail.com" />
        <FormRow type="password" name="password" defaultValue="secret@123" />
        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};
export default Register;
