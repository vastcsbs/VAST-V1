import { Outlet } from "react-router-dom";
import { Navbar, BigSidebar, SmallSidebar } from "../components";
import { createContext, useContext, useState } from "react";
import Wrapper from "../assets/wrappers/Home";

const HomeContext = createContext();

const Home = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <HomeContext.Provider
      value={{
        showSidebar,
        toggleSidebar,
      }}
    >
      <Wrapper>
        <main className="home">
          <BigSidebar />
          <SmallSidebar />
          <div>
            <Navbar />
            <div className="home-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </HomeContext.Provider>
  );
};

export const useHomeContext = () => useContext(HomeContext);
export default Home;
