import styled from "styled-components";

const Wrapper = styled.section`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }

  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }

  h1 {
    font-weight: 700;
    span {
      color: red;
    }
    margin-bottom: 1.5rem;
  }

  p {
    line-height: 2;
    color: var(--text-secondary-color);
    margin-bottom: 1.5rem;
    max-width: 35em;
  }

  .register-link {
    margin-right: 1rem;
  }

  .main-img {
    display: none;
  }

  .btn {
    padding: 0.75rem 1rem;
  }

  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 400px;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`;
export default Wrapper;

// import styled from "styled-components";

// const Wrapper = styled.section`
//   nav {
//     margin: 0 auto;
//     height: 6rem;
//     display: flex;
//     align-items: center;
//   }
//   .page {
//     min-height: calc(100vh - var(--nav-height));
//     display: grid;
//     align-items: center;
//     margin-top: -3rem;
//   }
//   .main-img {
//     display: none;
//   }

//   .main-div {
//     display: flex;
//     align-items: center;
//   }

//   .login-btn {
//     margin-left: 150px;
//     margin-right: 1rem;
//     padding: 0.5rem 1rem;
//     background: black;
//     text-decoration: none;
//     color: white;
//     border-radius: 10%;
//   }

//   .register-btn {
//     padding: 0.5rem 1rem;
//     align-items: center;
//     display: inline-block;
//     background: black;
//     text-decoration: none;
//     color: white;
//     border-radius: 10%;
//   }

//   p {
//     margin-top: 6rem;
//     line-height: 2;
//     font-size: large;
//     margin-bottom: 2rem;
//     max-width: 35em;
//   }

//   @media (min-width: 992px) {
//     .page {
//       grid-template-columns: 1fr 400px;
//       column-gap: 3rem;
//     }
//     .main-img {
//       display: block;
//     }
//   }
// `;

// export default Wrapper;
