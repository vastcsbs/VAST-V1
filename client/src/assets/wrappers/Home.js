import styled from "styled-components";

const Wrapper = styled.section`
  .home {
    display: grid;
    grid-template-columns: 1fr;
  }
  .home-page {
    width: 90vw;
    margin: 0 auto;
    padding: 2rem 0;
  }
  @media (min-width: 992px) {
    .home {
      grid-template-columns: auto 1fr;
    }
    .home-page {
      width: 90%;
    }
  }
`;
export default Wrapper;
