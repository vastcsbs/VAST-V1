import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Making <span>Freelancing</span> easy
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            quae eius beatae asperiores, reprehenderit adipisci. Harum aliquam
            neque eius temporibus reiciendis iusto fugit, dignissimos sit ad
            inventore eos, accusamus cumque.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login
          </Link>
        </div>
        <img
          src="https://miro.medium.com/v2/resize:fit:1400/1*MLnw1zny6I15TPcCdKYLdw.jpeg"
          alt="freelancing"
          className="img main-img"
        />
      </div>
    </Wrapper>
  );
};
export default Landing;
