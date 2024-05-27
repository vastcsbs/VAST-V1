import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/Choose";

const Choose = () => {
  return (
    <Wrapper>
      <div className="container">
        <Link className="option" to="/home/choose-freelancing">
          Freelancing
        </Link>
        <Link className="option" to="/home/code-store">
          Code Store
        </Link>
      </div>
    </Wrapper>
  );
};
export default Choose;
