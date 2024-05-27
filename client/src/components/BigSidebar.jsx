import { NavLinkss } from ".";
import Wrapper from "../assets/wrappers/BigSidebar";
import { useHomeContext } from "../pages/Home";
import Logo from "./Logo";

const BigSidebar = () => {
  const { showSidebar } = useHomeContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container" : "sidebar-container show-sidebar"
        }
      >
        <header>
          <h4>Domains</h4>
        </header>
        <NavLinkss isBigSidebar />
      </div>
    </Wrapper>
  );
};
export default BigSidebar;
