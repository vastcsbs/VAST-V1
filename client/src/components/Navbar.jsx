import { FaAlignLeft } from "react-icons/fa";
import Logo from "./Logo";
import { useHomeContext } from "../pages/Home";
import Wrapper from "../assets/wrappers/Navbar";

const Navbar = () => {
  const { toggleSidebar } = useHomeContext();
  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
        </div>
        <div className="btn-container"></div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
