import { Link, NavLink } from "react-router-dom";
import { useHomeContext } from "../pages/Home";
import axios from "axios";
import { useEffect, useState } from "react";

const NavLinkss = (isBigSidebar) => {
  const { toggleSidebar } = useHomeContext();
  const [domains, setDomains] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchDomains = async () => {
    try {
      const response = await axios.get(
        "https://localhost:7173/Controller/getDomain"
      );

      if (response.status !== 200) {
        setIsError(true);
        setIsLoading(false);
        return;
      }

      const domains = await response.data;
      console.log(domains);
      setDomains(domains);
    } catch (error) {
      console.log("coming here");
      setIsError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchDomains();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>There was an error...</h2>;
  }

  return (
    <div className="nav-links">
      {domains.map((dom) => {
        const { domain } = dom;
        return (
          <Link onClick={isBigSidebar ? null : toggleSidebar}>{domain}</Link>
        );
      })}
      {/* {links.map((link) => {
        const { text, path, icon } = link;
        return (
          <NavLink
            to={path}
            key={text}
            className="nav-link"
            onClick={isBigSidebar ? null : toggleSidebar}
            end
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })} */}
    </div>
  );
};
export default NavLinkss;
