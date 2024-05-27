import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/FreelanceBuy";

const FreelanceBuy = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://localhost:7173/Controller/getFreeLancer"
      );

      if (response.status !== 200) {
        setIsError(true);
        setIsLoading(false);
        return;
      }

      const data = await response.data;
      console.log(data);
      setData(data);
    } catch (error) {
      console.log("coming here");
      setIsError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>There was an error...</h2>;
  }

  return (
    <Wrapper>
      {data.map((gig) => {
        const { username, domain, rating, price } = gig;
        return (
          <div className="box">
            <div className="user card" key={username}>
              <img
                className="image"
                src="https://m.media-amazon.com/images/I/618gNo+ohxL.AC_UY218.jpg"
                alt=""
              />
              <h5 className="card-title">
                <Link className="link">USER NAME: {username}</Link>
              </h5>
              <h5 className="card-text lh-1">
                <Link className="link">DOMAIN :{domain}</Link>
              </h5>
              <h5 className="card-text lh-1">RATING: {rating}</h5>
              <h5 className="card-text lh-1">MINIMUM FEE: {price}</h5>
            </div>
          </div>
        );
      })}
    </Wrapper>
  );
};
export default FreelanceBuy;

// import axios from "axios";
// import { useEffect, useState } from "react";

// const FreelanceBuy = () => {
//   const [data, setData] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isError, setIsError] = useState(false);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(
//         "https://localhost:7173/Controller/getFreeLancer"
//       );

//       if (response.status !== 200) {
//         // Corrected status check
//         setIsError(true);
//         setIsLoading(false);
//         return;
//       }

//       const fetchedData = response.data; // No need to await here
//       setData(fetchedData);
//     } catch (error) {
//       console.log("Error:", error);
//       setIsError(true);
//     }
//     setIsLoading(false);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []); // Empty dependency array to run only once

//   useEffect(() => {
//     console.log(data); // Log data when it changes
//   }, [data]); // Run this useEffect whenever data changes

//   if (isLoading) {
//     return <h2>Loading...</h2>;
//   }
//   if (isError) {
//     return <h2>There was an error...</h2>;
//   }

//   return (
//     <>
//       {data.map((gig) => {
//         const { username, domain, rating, price } = gig;
//         return (
//           <div key={username}>
//             <h4>{username}</h4>
//             <h3>{domain}</h3>
//             <h5>{rating}</h5>
//             <h6>{price}</h6>
//           </div>
//         );
//       })}
//     </>
//   );
// };
// export default FreelanceBuy;
