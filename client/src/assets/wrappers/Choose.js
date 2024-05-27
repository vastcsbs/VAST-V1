import styled from "styled-components";

const Wrapper = styled.div`
  body {
    margin: 0;
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f0f0;
  }

  .container {
    display: flex;
    justify-content: space-between;
    max-width: 80%;
  }

  .option {
    width: 45%;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .option:hover {
    transform: scale(1.1);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  }

  .option:nth-child(1) {
    background-color: #ff7f50; /* Coral */
  }

  .option:nth-child(2) {
    background-color: #6495ed; /* Cornflower Blue */
  }

  @media (max-width: 600px) {
    .container {
      flex-direction: column;
      align-items: center;
    }

    .option {
      width: 80%;
      margin-bottom: 20px;
    }
  }
`;
export default Wrapper;
