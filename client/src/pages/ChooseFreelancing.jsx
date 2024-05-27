import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/Choose";

const ChooseFreelancing = () => {
  return (
    <Wrapper>
      <div className="container">
        <Link className="option" to="/home/freelance-buy">
          BUY / HIRE
        </Link>
        <Link className="option" to="/home/freelance-post">
          POST AS FREELANCER
        </Link>
      </div>
    </Wrapper>
  );
};
export default ChooseFreelancing;
