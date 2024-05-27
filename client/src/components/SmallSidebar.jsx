import { FaTimes } from "react-icons/fa";
// import Wrapper from "../assets/wrappers/SmallSidebar";
import { useHomeContext } from "../pages/Home";
import Logo from "./Logo";
import Wrapper from "../assets/wrappers/SmallSidebar";
import { NavLinkss } from ".";

const SmallSidebar = () => {
  const { showSidebar, toggleSidebar } = useHomeContext();

  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button type="button" className="close-btn" onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinkss />
        </div>
      </div>
    </Wrapper>
  );
};
export default SmallSidebar;
